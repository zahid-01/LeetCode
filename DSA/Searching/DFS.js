class queue {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class myTree {
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

  bfs() {}

  dfsInorder(node, inOrder) {
    if (node.left) this.dfsInorder(node.left, inOrder);

    inOrder.push(node.value);

    if (node.right) this.dfsInorder(node.right, inOrder);
  }

  dfsPreorder(node) {
    console.log(node.value);

    if (node.left) this.dfsPreorder(node.left);

    if (node.right) this.dfsPreorder(node.right);
  }

  dfsPostOrder(node) {
    if (node.left) this.dfsPostOrder(node.left);
    if (node.right) this.dfsPostOrder(node.right);
    console.log(node.value);
  }
}

const tree = new myTree(9);
tree.insertNode(4);
tree.insertNode(1);
tree.insertNode(6);
tree.insertNode(20);
tree.insertNode(15);
tree.insertNode(45);

let inOrder = [];
tree.dfsInorder(tree.root, inOrder);
// console.log(inOrder);

// tree.dfsPreorder(tree.root);

tree.dfsPostOrder(tree.root);
