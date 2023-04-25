// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// Strategy:
// Use a left and right pointer for the str
// Evaluate if the left and right pointer are equal to each other
//  If they are, it is a valid 1 str palindrome (value of 1)
// Evaluate if the left and right pointer chars are equal
//  If they are, it is a valid 2 str palindrome (value of 2), then move the left and right pointer over
// If the pointers are not equal then recursively move to a decision tree of two moves (moving the left pointer over)
//  or moving the right pointer over
// Evaluate the max of both decision tree and return the value
// Memoize to reduce repeat calculations for very long strings

const maxPalinSubsequence = (str, left = 0, right = str.length - 1, memo = {}) => {
  const pos = left + "," + right;
  if (pos in memo) return memo[pos];

  if (left > right) return 0;
  if (left === right) return 1;
  if (str[left] === str[right]) {
    memo[pos] = 2 + maxPalinSubsequence(str, left + 1, right - 1, memo);
    return memo[pos];
  }

  const moveLeft = maxPalinSubsequence(str, left + 1, right, memo);
  const moveRight = maxPalinSubsequence(str, left, right - 1, memo);

  memo[pos] = Math.max(moveLeft, moveRight);
  return memo[pos];
};
