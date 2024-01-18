class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoubleLL {
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
    const newNode = new Node(value);

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
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

  getNodesReverse() {
    let arr = [];
    let newTail = this.tail;
    while (newTail !== null) {
      arr.push(newTail.value);
      newTail = newTail.previous;
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

    const leader = this.traverseToIndex(index);

    let follower = leader.next;
    leader.next = { previous: leader, value, next: follower };
    follower.previous = leader.next;
    this.length++;
  }

  delete(index) {
    if (index === 0) this.head = this.head.next;
    let head = this.head;
    const deleteIndex = this.traverseToIndex(index);

    deleteIndex.next = deleteIndex.next.next;
    deleteIndex.next.previous = deleteIndex;
    this.length--;
  }
}

const myLL = new DoubleLL(4);
myLL.append(2);
myLL.append(3);
myLL.append(4);
myLL.append(5);
myLL.append(10);
myLL.prepend(33);
myLL.append(123);
myLL.append(222);
myLL.append(333);
myLL.insert(999, 3);
myLL.getNodes();
myLL.delete(5);
myLL.getNodes();
myLL.getNodesReverse();
