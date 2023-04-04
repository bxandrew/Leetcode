// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// Input: String
// Output: Length of max palindrome

// Strategy:
// Use a two pointer strategy to iterate through the string recursively
// Basecase is if str is of length 1 (pointers are at the same position) return 1
// Basecase2 is if the pointers pass each other (return 0) invalid string
// Check if first and last letter are equal (if so, add 2 to max count) and then recursively iterate through other letters (move pointers 1 step)
// Else, we recursive traverse the string by moving pointer left by 1 and then checking that substring and same with right pointer
// Add the max return of the recursive calls

const maxPalinSubsequence = (
  str,
  left = 0,
  right = str.length - 1,
  memo = {}
) => {
  const key = left + "," + right;
  if (key in memo) return memo[key];
  if (left === right) return 1;
  if (left > right) return 0;

  let maxCount = 0;
  if (str[left] === str[right]) {
    maxCount += 2;
    maxCount += maxPalinSubsequence(str, left + 1, right - 1, memo);
  } else {
    const leftResult = maxPalinSubsequence(str, left + 1, right, memo);
    const rightResult = maxPalinSubsequence(str, left, right - 1, memo);
    maxCount += Math.max(leftResult, rightResult);
  }

  memo[key] = maxCount;
  return memo[key];
};

console.log(maxPalinSubsequence("luwxult")); // -> 5
console.log(maxPalinSubsequence("xyzaxxzy")); // -> 6
console.log(maxPalinSubsequence("lol")); // -> 3
