/**
 * Queue Using Stacks: Enqueue ( ** Interview Question)
Implement a method called enqueue() for a MyQueue class that adds a new element to the end of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

The method should add the given value to the end of the queue.



Constraints:

The MyQueue class should be implemented using two Stack objects provided in the Stack class.

You cannot use any other data structures or built-in queue manipulation methods for this task.



Class Definition:

class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
 
    // ... other methods ...
 
    enqueue(value) {
        // Your implementation goes here
    }
}




Example 1:

Suppose you have a MyQueue object, queue, with the following values:
[3, 2, 1]

After calling the enqueue() function:

queue.enqueue(4);

The queue should now have the following values:
[4, 3, 2, 1]





Example 2:

Now suppose you have a MyQueue object, queue, with the following values:
['apple', 'banana', 'orange']

After calling the enqueue() function:

queue.enqueue('grape');

The queue should now have the following values:
['grape', 'apple', 'banana', 'orange']
 */

class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  trace() {
    console.log(this.stack1.stackList);
  }

  peek() {
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }

  // WRITE THE ENQUEUE METHOD HERE //
  //                               //
  //                               //
  //                               //
  //                               //
  ///////////////////////////////////
  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }
  dequeue() {
    let dequeued = null;

    while (!this.stack1.isEmpty()) {
      if (!dequeued) {
        dequeued = this.stack1.pop();
      } else {
        this.stack2.push(this.stack1.pop());
      }
    }

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }

    return dequeued;
  }
}

const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Initial queue state:");
console.log("Peek: ", queue.peek());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing the first element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the second element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the third element: ", queue.dequeue());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing from empty queue: ", queue.dequeue());



/*
    EXPECTED OUTPUT:
    ----------------
    Initial queue state:
    Peek:  1
    Is the queue empty?  false
    Dequeueing the first element:  1
    Peek after dequeueing:  2
    Dequeueing the second element:  2
    Peek after dequeueing:  3
    Dequeueing the third element:  3
    Is the queue empty?  true
    Dequeueing from empty queue:  null

*/
