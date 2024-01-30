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
  // Create new node and add this to the end
  push(value) {
    const node = new Node(value);

    // If there is no nodes in the list at all
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  // create new Node and add this to the start
  unshift(value) {}
  // creates new node and insert at index
  insert(value) {}
}

const myLinkedList = new LinkedList(1);
