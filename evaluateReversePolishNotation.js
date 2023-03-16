// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */

// Input: An array of string elements representing either an integer or an operation
// Output: A number

// Strategy:
// My approach would try to use a stack like structure
// First iterate through the array of tokens, if it is a number, add them onto our stack
// If it is an operation, take the last two elements out of our stack, do the operation and put it back into the stack
// Continue

var evalRPN = function (tokens) {
  debugger;
  const numbers = [];
  const operations = { "+": "add", "-": "sub", "*": "mult", "/": "div" };

  for (let token of tokens) {
    // If not an operation, add it onto the numbers stack
    if (!operations[token]) {
      numbers.push(Number(token));
    } else {
      // Else it is an operation, find out which operation and also take two numbers out of our numbers array
      let num2 = numbers.pop();
      let num1 = numbers.pop();

      if (operations[token] === "add") {
        numbers.push(num1 + num2);
      } else if (operations[token] === "sub") {
        numbers.push(num1 - num2);
      } else if (operations[token] === "div") {
        // For division, you want to round to the direction of 0 (Negative nums Math.ceil) (Positive nums Math.floor)
        const result = num1 / num2;
        if (result > 0) {
          numbers.push(Math.floor(result));
        } else {
          numbers.push(Math.ceil(result));
        }
      } else if (operations[token] === "mult") {
        numbers.push(num1 * num2);
      }
    }
  }

  return numbers[0];
};

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens));
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
