// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  // Purpose is to find palindrome by expanding from middle and increment the count
  const findPalindrome = (s, start, end) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      // Everytime we enter this loop, we have found a palindrome (starting from 1 char or 2 chars)
      count += 1;
      start--;
      end++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    findPalindrome(s, i, i);
    findPalindrome(s, i, i + 1);
  }

  return count;
};

console.log(countSubstrings("aaa"));
