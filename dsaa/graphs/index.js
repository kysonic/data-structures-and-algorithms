class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false;
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return true;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].splice(
        this.adjacencyList[vertex1].indexOf(vertex2),
        1
      );
      this.adjacencyList[vertex2].splice(
        this.adjacencyList[vertex2].indexOf(vertex1),
        1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertexToRemove) {
    Object.keys(this.adjacencyList).forEach((vertex) => {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
        (v) => v !== vertexToRemove
      );
    });

    delete this.adjacencyList[vertexToRemove];
  }
}
