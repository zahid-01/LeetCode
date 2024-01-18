//  2 --> 3 --> 4

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  traverseToIndex(index) {
    let insertIndex = this.head;
    for (let i = 0; i < index - 1; i++) {
      insertIndex = insertIndex.next;
    }
    return insertIndex;
  }

  prepend(value) {
    let head = this.head;
    this.head = new Node(value);
    this.head.next = head;
    this.length++;
  }

  append(value) {
    this.tail = this.tail.next = new Node(value);
    this.length++;
  }

  getNodes() {
    let arr = [];
    let newHead = this.head;
    while (newHead !== null) {
      arr.push(newHead.value);
      newHead = newHead.next;
    }
    console.log(arr);
  }

  insert(value, index) {
    //Check the corner cases
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index > this.length) {
      this.append(value);
      return;
    }

    const insertIndex = this.traverseToIndex(index);

    let ref = insertIndex.next;
    insertIndex.next = { value, next: ref };
    this.length++;
  }

  delete(index) {
    if (index === 0) this.head = this.head.next;
    let head = this.head;
    const deleteIndex = this.traverseToIndex(index);

    deleteIndex.next = deleteIndex.next.next;
    this.length--;
  }

  reverseLL() {
    let past = this.head;
    let future = past.next;

    while (future) {
      const temp = future.next;
      future.next = past;
      past = future;
      future = temp;
    }

    console.log("TAIL: ", this.tail);
    console.log("HEAD: ", this.head);
    let tail = this.tail;
    this.tail = this.head;
    this.tail.next = null;
    this.head = tail;
  }
}

const myLL = new LinkedList(4);
myLL.append(2);
myLL.append(3);
myLL.append(4);
myLL.append(5);
myLL.append(10);
myLL.prepend(33);
// myLL.prepend(77);
myLL.append(123);
myLL.append(222);
myLL.append(333);
myLL.insert(9871, 0);
myLL.insert(9871, 11);
myLL.delete(0);
myLL.getNodes();
myLL.reverseLL();
myLL.getNodes();
