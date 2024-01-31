class Node {
  constructor(value) {
    this.value = value;
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
  unshift(value) {
    const node = new Node(value);
    node.next = this.head;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }
  // Remove first and return it
  shift() {
    if (!this.head) {
      return undefined;
    }
    const temp = this.head;
    this.head = this.head.next;

    temp.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }
  // creates new node and insert at index

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const temp = this.get(index - 1);

    const removed = temp.next;
    temp.next = removed.next;
    removed.next = null;
    this.length--;

    return removed;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(7);
myLinkedList.push(4);
