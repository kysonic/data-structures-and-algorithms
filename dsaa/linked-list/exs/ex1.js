// Find middle element
class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
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
          console.log("Head: null");
      } else {
          console.log("Head: " + this.head.value);
      }
  }

  getTail() {
      if (this.tail === null) {
          console.log("Tail: null");
      } else {
          console.log("Tail: " + this.tail.value);
      }
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
  }
  
  // WRITE THE FINDMIDDLENODE METHOD HERE // 
  //                                      //
  //                                      //
  //                                      //
  //                                      //
  //////////////////////////////////////////
  findMiddleNode() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      return this.head;
    }

    let sp = this.head;
    let fp = this.head; 

    while (fp && fp.next) {
      sp = sp.next;
      fp = fp.next.next;
    }

    return sp;
  }
}



let myLinkedList = new LinkedList(20);
myLinkedList.push(1);
myLinkedList.push(20);
myLinkedList.push(1);
myLinkedList.push(1);
myLinkedList.push(1);
myLinkedList.push(1);
myLinkedList.push(555);
myLinkedList.push(1);
myLinkedList.push(20);
myLinkedList.push(1);
myLinkedList.push(5);
myLinkedList.push(1);
myLinkedList.push(1);
myLinkedList.push(1);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);