class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
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

    const node = this.tail;

    if (this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }

    node.prev = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node; 
      this.head = node;
    }

    this.length++;

    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    
    const shifted = this.head; 

    if (this.head.next) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }

    shifted.next = null;
    shifted.prev = null;

    this.length--; 

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return shifted;
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

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const next = prev.next;

    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    next.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (!this.head) {
      return undefined;
    }
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const next = prev.next.next;

    const removed = prev.next;

    prev.next = next;
    next.prev = prev;

    removed.next = null;
    removed.prev = null;

    this.length--;

    return removed;
  }
}
