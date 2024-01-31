// Is there loops
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // WRITE HAS LOOP METHOD HERE //
  //                            //
  //                            //
  //                            //
  //                            //
  ////////////////////////////////
  hasLoop() {
    if (!this.head) {
      return false;
    }
    if (this.head === this.tail) {
      return false;
    }

    let sp = this.head;
    let fp = this.head;

    for (let i = 0; i < this.length; i++) {
        sp = sp.next;
        fp = fp.next && fp.next.next;

        if (!fp) {
            return false;
        }

        if (sp === fp) {
            return true;
        }
    }

    return false;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
