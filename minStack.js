// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// var MinStack = function () {
//   this.storage = [];
//   this.minStorage = [];
//   this.index = 0;
// };

/**
 * @param {number} val
 * @return {void}
 */

// Strategy:
// Implement a storage as an array, but use a pointer to access the elements in the array (make it perform like a stack)
// Implement a second storage array as the minStack which will identify the current minimum in the stack at any point.
// The index will represent the minimum value at the pointer of the current stack
//      ( if the stack is at index 5, the minimum value in the stack is located at index5 in the minStorage )

MinStack.prototype.push = function (val) {
  this.storage[this.index] = val;
  if (this.index === 0) {
    this.minStorage[this.index] = val;
  } else {
    this.minStorage[this.index] =
      val < this.minStorage[this.index - 1]
        ? val
        : this.minStorage[this.index - 1];
  }

  this.index++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const element = this.storage[this.index - 1];
  this.index--;
  return element;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.storage[this.index - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStorage[this.index - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
