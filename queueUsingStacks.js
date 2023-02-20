// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false


// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.


// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


var MyQueue = function() {
  this._storage = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  // Simply adding to the queue is to just place an item at the back of the queue (push)
  this._storage.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // To pop is to take an element off the front of the queue.
  // In order to access the first element, we must pop all the elements off one by one and store them in a temporary stack
  const tempStack = [];

  // While storage has items in it, pop everything out one by one and push into our tempStack
  while (this._storage.length) {
    let lastElement = this._storage.pop();
    tempStack.push(lastElement);
  }

  // After we have emptied our queue (by popping and pushing into temp stack)
  // It should be in reverse order, take one pop off the temp stack and then return everything back to this._storage
  let target = tempStack.pop();

  while (tempStack.length) {
    let lastElement = tempStack.pop();
    this._storage.push(lastElement);
  }

  return target;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  // Peeking is to find the first element in queue
  // Do this by implementing the queue pop function without taking the element out (just returning the reference value)
  const tempStorage = [];

  while (this._storage.length) {
    let lastElement = this._storage.pop();
    tempStorage.push(lastElement);
  }

  // Now grab the peeked element, which is in the last position of tempStorage
  let peek = tempStorage[tempStorage.length - 1];

  // Now put everything back
  while (tempStorage.length) {
    let lastElement = tempStorage.pop();
    this._storage.push(lastElement);
  }

  return peek;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this._storage.length ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */