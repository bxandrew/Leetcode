// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  //our stack is for left brackets
  const stack = [];

  //iterate through our string
  for (let i = 0; i < s.length; i++) {
    //determine if it is a left bracket or a right bracket
    //if it is a left bracket, push onto stack
    if (pairs.hasOwnProperty(s[i]) === true) {
      stack.push(s[i]);
    //if it is a right bracket, pop one off the stack and see if they match
    } else if (Object.values(pairs).includes(s[i]) === true) {
      let lastStackFrame = stack.pop();
      //if the left bracket matches the current right bracket continue iterating
      if (pairs[lastStackFrame] === s[i]) {
        continue;
      } else {
        return false;
      }
    //if it starts off as right bracket, false
    } else {
      return false;
    }
  }
    //check to see if the next value corresponds to the objects keyvalue pair
      //add the current value onto the stack
  //return true if the stack is empty
  return stack.length === 0
};