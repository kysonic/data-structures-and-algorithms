class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);
    
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    const temp = this.first;
    this.first = this.first.next;

    temp.next = null;

    this.length--;

    if (this.length === 0) {
      this.first = null;  
    }

    return temp;
  }
}
