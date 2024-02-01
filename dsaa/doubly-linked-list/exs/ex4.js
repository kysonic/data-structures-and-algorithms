/**
 * Implement a member function called swapPairs() that swaps every two adjacent nodes of a doubly linked list.

Note: This DoublyLinkedList does not have a tail pointer which will make the implementation easier.



Output:

The function should modify the doubly linked list in-place, swapping every two adjacent nodes.



Constraints:

You can only traverse the doubly linked list once.





Example 1:

Suppose you have a DoublyLinkedList object, list, with the following values:
1 <-> 2 <-> 3 <-> 4 <-> 5

After calling the swapPairs() function:

list.swapPairs();

The doubly linked list should now have the following values:
2 <-> 1 <-> 4 <-> 3 <-> 5





Example 2:

Now suppose you have a DoublyLinkedList object, list, with the following values:
3 <-> 1 <-> 2 <-> 4

After calling the swapPairs() function:

list.swapPairs();

The doubly linked list should now have the following values:
1 <-> 3 <-> 4 <-> 2



Note: You must solve the problem WITHOUT MODIFYING THE VALUES in the list's nodes (i.e., only the nodes' prev and next pointers may be changed.)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
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

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
    this.length++;
  }

  // WRITE THE SWAPPAIRS METHOD HERE //
  //                                 //
  //                                 //
  //                                 //
  //                                 //
  /////////////////////////////////////
  swapPairs() {
    if (!this.head || this.length === 1) {
      return this;
    }
    let first = this.head;
    let second = first.next;

    let index = 0;
    while (second) {
      const firstPrev = first.prev;
      const secondNext = second.next;
      first.next = second.next;
      first.prev = second;

      second.prev = first.prev;
      second.next = first;

      if (index === 0) {
        this.head = second;
      }

      if (firstPrev) {
        const previous = firstPrev.next;
        previous.next = second;
        second.prev = previous;
      }

      if (!secondNext || !secondNext.next) {
        this.tail = first;
      }

      first = secondNext;
      second = first && first.next;
      index++;
    }

    this.head.prev = null;

    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log('Original List 1:');
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log('\nList 1 after swapping pairs:');
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log('\nOriginal List 2:');
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log('\nList 2 after swapping pairs:');
myDoublyLinkedList2.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original List 1:
  1
  2
  3
  4
  5

  List 1 after swapping pairs:
  2
  1
  4
  3
  5

  Original List 2:
  1
  2
  3
  4
  5
  6

  List 2 after swapping pairs:
  2
  1
  4
  3
  6
  5
*/
