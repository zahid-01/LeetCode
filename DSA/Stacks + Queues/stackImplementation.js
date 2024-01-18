class newElement {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

class myStack {
  constructor() {
    this.bottom = null;
    this.top = null;
    this.length = 0;
  }

  push(element) {
    const el = new newElement(element);
    if (this.length === 0) {
      this.top = this.bottom = el;
      this.length++;
      return;
    }
    el.next = this.top;
    this.top = el;
    this.length++;
  }

  pop() {
    if (!this.length) return "Stack underflow";
    if (this.top === this.bottom) {
      const topEl = this.top.value;
      this.top = this.bottom = null;
      this.length--;
      return topEl;
    }
    const topEl = this.top.value;
    this.top = this.top.next;
    this.length--;
    return topEl;
  }

  peek() {
    if (!this.top) {
      console.log("stack empty");
      return;
    }
    console.log(this.top.value);
  }
}

const stack = new myStack();
stack.push(8);
stack.push(7);
stack.push(6);
stack.push(5);
stack.peek();
console.log("Stack top : ", stack.pop());
stack.peek();
console.log("Stack top : ", stack.pop());
stack.peek();
console.log("Stack top : ", stack.pop());
stack.peek();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(5);
stack.pop();
stack.peek();
console.log(stack);
