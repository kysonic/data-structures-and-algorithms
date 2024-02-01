class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;

    if (!this.head) {
      this.top = node;
    } else {
      node.next = this.head;
      this.top = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    const temp = this.top;
    this.top = this.top.next;

    temp.next = null;

    this.length--;

    if (this.length === 0) {
      this.top = null;  
    }

    return temp;
  }
}
