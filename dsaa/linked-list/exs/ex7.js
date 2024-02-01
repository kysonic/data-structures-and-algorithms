/** 
   * Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  m and n (inclusive) in the linked list.

Note: this linked list class does NOT have a tail which will make this method easier to implement.

Assumption: You can assume that m and n are not out of bounds.



Output:

The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.



Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.





Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5


After calling the reverseBetween(1, 3) function:

list.reverseBetween(1, 3);
The linked list should now have the following values:
1 -> 4 -> 3 -> 2 -> 5





Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6


After calling the reverseBetween(3, 5) function:

list.reverseBetween(3, 5);
The linked list should now have the following values:
1 -> 2 -> 3 -> 6 -> 5 -> 4
   */

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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = '';
    if (temp === null) {
      console.log('empty');
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += ' -> ';
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REVERSEBETWEEN METHOD HERE //
  //                                      //
  //                                      //
  //                                      //
  //                                      //
  //////////////////////////////////////////
  reverseBetween(m, n) {
    if (m < 0 || m > this.length || n < 0 || n > this.length) {
      return undefined;
    }

    if (this.length <= 1) {
      return this;
    }

    let temp = this.head;
    let next = null;
    let prev = null;
    let index = 0;
    ///
    let leftConnectNode = null;
    let rightConnectNode = null;
    let reverseStartNode = null;
    let reverseEndNode = null;

    while (temp) {
      if (index === m - 1) {
        leftConnectNode = temp;
      }
      if (index === m) {
        reverseEndNode = temp;
      }
      if (index === n) {
        reverseStartNode = temp;
      }
      if (index === n + 1) {
        rightConnectNode = temp;
      }

      next = temp.next;
      // Reverse if we are inside
      if (index > m && index <= n) {
        temp.next = prev;
      }
      prev = temp;
      temp = next;
      index++;
    }

    if (leftConnectNode) {
      leftConnectNode.next = reverseStartNode;
    } else {
      this.head = reverseStartNode;
    }

    if (reverseEndNode) {
      reverseEndNode.next = rightConnectNode;
    }

    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();
console.log('----------------');

const m = 0;
const n = 2;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1 -> 2 -> 3 -> 4 -> 5
  List after reversing between indexes of 2 and 4:
  1 -> 2 -> 5 -> 4 -> 3
*/
