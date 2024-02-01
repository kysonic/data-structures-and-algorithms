/**
 * LL: Binary to Decimal ( ** Interview Question)
Objective:

You have a linked list where each node represents a binary digit (0 or 1). The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.



How Binary to Decimal Conversion Works:

In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.

The rightmost digit is multiplied by 2^0 (which equals 1).

The next digit to the left is multiplied by 2^1 (which equals 2).

The digit after that is multiplied by 2^2 (which equals 4). ... and so on.

To find the decimal representation:

Multiply each binary digit by its corresponding power of 2 value.

Sum up all these products.



Example Execution with Binary 101:

Start with num = 0.

Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1

Process 0: num = 1 * 2 + 0 = 2

Process 1: num = 2 * 2 + 1 = 5

Return num, which is 5.



Steps Involved in the Function:

A variable num is initialized to 0, which will store our computed decimal number.

Starting from the head of the linked list (the leftmost binary digit), iterate through each node until the end.

For every node, double the current value of num (this is analogous to shifting in binary representation). Then, add the binary digit of the current node.

Move to the next node and repeat until you've visited all nodes.

Return the value in num, which now represents the decimal value of the binary number in the linked list.
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

  //   +===================================================+
  //   |               WRITE YOUR CODE HERE                |
  //   | Description:                                      |
  //   | - This method converts a binary number,           |
  //   |   represented as a linked list, to a decimal int. |
  //   |                                                   |
  //   | Return type: int                                  |
  //   | - Returns the decimal equivalent of the binary    |
  //   |   number.                                         |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use a while loop to traverse the linked list.|
  //   | - Multiply the current sum by 2 and add the value |
  //   |   at each node to get the decimal number.         |
  //   +===================================================+
  binaryToDecimal() {
    let temp = this.head;
    let num = 0;
    let i = 0;

    while (temp) {
      num += temp.value * (Math.pow(2, (this.length - 1) - i));
      i++;
      temp = temp.next;
    }

    return num;
  }
}

// ---------------
// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log('Convert 1011 to 11:');
console.log('Input: 1 -> 0 -> 1 -> 1');
console.log('Output: ', list1.binaryToDecimal());
console.log('---------------');

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log('Convert 1100 to 12:');
console.log('Input: 1 -> 1 -> 0 -> 0');
console.log('Output: ', list2.binaryToDecimal());
console.log('---------------');

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log('Convert 1 to 1:');
console.log('Input: 1');
console.log('Output: ', list3.binaryToDecimal());
console.log('---------------');

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log('Convert empty list to 0:');
console.log('Input: empty');
console.log('Output: ', list4.binaryToDecimal());
console.log('---------------');
