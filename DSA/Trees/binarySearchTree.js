class node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new node(value);
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new node(value);
          break;
        }
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new node(value);
          break;
        }
        currentNode = currentNode.right;
      }
      if (value === currentNode.value) {
        break;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    if (currentNode.value === value) return value;

    while (true) {
      if (currentNode.value === value) return value;

      if (currentNode.value > value) {
        //Go Left
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
        // continue;
      }

      if (currentNode.value < value) {
        //Go right
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
        // continue;
      }
    }
  }
}

const BTree = new BinaryTree();
BTree.insert(4);
BTree.insert(20);
BTree.insert(30);
BTree.insert(42);
BTree.insert(3);
BTree.insert(1);
BTree.insert(2);

console.log(BTree.lookup(2));
