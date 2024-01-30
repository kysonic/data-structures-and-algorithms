class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  tail = null;
  // Create new node
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  trace() {
    let node = this.head;
    while (node?.next) {
      console.log(node);
      node = node.next;
    }

    console.log(node);
  }
  // Create new node and add this to the end
  push(value) {
    const node = new Node(value);

    // If there is no nodes in the list at all
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // in case if we have at least one
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // create new Node and add this to the start
  unshift(value) {}
  // creates new node and insert at index
  insert(value) {}
}

const myLinkedList = new LinkedList(7);
myLinkedList.push(4);
