class newElement {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enque(value) {
    const newEl = new newElement(value);
    newEl.next = this.tail;
    this.tail = newEl;
    this.length++;
  }
}
