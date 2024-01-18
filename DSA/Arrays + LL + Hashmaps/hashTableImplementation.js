class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  get(key) {
    const hash = this._hash(key);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i][0] === key) return this.data[hash][i];
      }
    }

    return undefined;
  }

  keys() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) console.log(this.data[i][0][0]);
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("grapess", 222);
myHashTable.set("apples", 10000);
myHashTable.set("juice", 10000);
myHashTable.set("arr", 10000);
myHashTable.set("ecf", 10000);
// console.log(myHashTable.get("grapess"));
myHashTable.keys();
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// console.log(myHashTable.data);
