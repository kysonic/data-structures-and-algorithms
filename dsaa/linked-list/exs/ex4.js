/**
 * Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 

Note: this linked list class does not have a tail which will make this method easier to implement.

The original relative order of the nodes should be preserved.



Input:

An integer x, the partition value.



Output:

The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x. 



Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.

You can create temporary nodes to make the implementation simpler.





Example 1:

Input:

Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

Process:

Values less than 5: 3, 2, 1

Values greater than or equal to 5: 8, 5, 10

Output:

Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10





Example 2:
Input:

Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

Process:

Values less than 3: 1, 2, 2

Values greater than or equal to 3: 4, 3, 5

Output:

Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5
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
  //   |                  WRITE YOUR CODE HERE             |
  //   | Description:                                      |
  //   | - This method partitions a linked list around a   |
  //   |   value `x`.                                      |
  //   | - It rearranges the nodes in such a way that all  |
  //   |   nodes less than `x` come before all nodes       |
  //   |   greater than or equal to `x`.                   |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
  //   |   to build two separate lists: one for elements   |
  //   |   smaller than `x` and one for elements greater   |
  //   |   or equal to `x`.                                |
  //   | - We then merge these two lists.                  |
  //   | - `prev1` and `prev2` are pointers to the last    |
  //   |   nodes of these lists.                           |
  //   | - The head of the resulting list is set as        |
  //   |   `dummy1.next`.                                  |
  //   +===================================================+
  partitionList(x) {
    let temp = this.head;
    let less = new Node(0);
    let greater = new Node(0);
    const start = less;
    const connect = greater;
    while (temp) {
      if (temp.value >= x) {
        greater.next = new Node(temp.value);
        greater = greater.next;
      } else {
        less.next = new Node(temp.value);
        less = less.next;
      }
      temp = temp.next;
    }
    less.next = connect.next;

    this.head = start.next;
  }
}

// const ll = new LinkedList(3);
// ll.push(8);
// ll.push(5);
// ll.push(10);
// ll.push(2);
// ll.push(1);

// ll.partitionList(5);

//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+

// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log('---------------------------------------');
  console.log(`Test ${testNum}: ${description}`);
  console.log('BEFORE: ');
  ll.printList();
  console.log('PARTITION: ' + x);
  ll.partitionList(x);
  console.log('AFTER: ');
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? 'PASS' : 'FAIL');
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, 'Basic partition', ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, 'No elements to partition', ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, 'All elements smaller', ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, 'Single-element list', ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, 'All elements equal to partition', ll5, 3, [3, 3, 3]);

console.log('---------------------------------------');
