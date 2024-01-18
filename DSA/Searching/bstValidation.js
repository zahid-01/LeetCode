class node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class myBST {
  constructor(value) {
    this.root = new node(value);
  }

  insertNode(value) {
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new node(value);
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new node(value);
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  validate(node) {
    let queue = [];
    let valid = true;

    if (!node) return false;
    queue.push(node);

    while (valid && queue.length) {
      console.log(queue[0].value);
      if (queue[0].left) {
        if (queue[0].left.value < queue[0].value) queue.push(queue[0].left);
        else valid = false;
      }
      if (queue[0].right) {
        if (queue[0].right.value > queue[0].value) queue.push(queue[0].right);
        else valid = false;
      }
      queue.shift();
    }
    return valid;
  }
}

const tree = new myBST(9);
tree.insertNode(4);
tree.insertNode(1);
tree.insertNode(6);
tree.insertNode(20);
tree.insertNode(15);
tree.insertNode(45);

// console.log(JSON.stringify(tree, null, 3));
tree.root.right.right.value = 1;
console.log(tree.validate(tree.root));
