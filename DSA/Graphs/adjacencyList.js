class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addNode(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) return;
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  getConnections() {
    for (const node in this.adjacencyList) {
      console.log(node, " --> ", this.adjacencyList[node]);
    }
  }
}

const myGraph = new Graph();
myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);

myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(6, 5);

myGraph.getConnections();
// console.log(myGraph);
