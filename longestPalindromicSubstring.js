// Given a string s, return the longest
// palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */

// Input: A string
// Output: String representing longest palindrome

// Strategy:
// Expand around the center of a palindrome (1 char or 2 char palindrome center start)
// Iterate through the string and build the longest palindrome from that center

var longestPalindrome = function (s) {
  let longest = "";

  // Will recursively find the largest palindrome from the given center
  const findLongest = (s, i, j) => {
    // While pointers are inBounds and are pointing at equal values , continue expanding (valid palindrome expansion)
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    return s.slice(i + 1, j); //bring i and j back to previous positions and take that substring
  };

  for (let i = 0; i < s.length; i++) {
    const middle1 = findLongest(s, i, i);
    const middle2 = findLongest(s, i, i + 1);
    // Eval longest to middle1 and middle2
    if (middle1.length > longest.length) longest = middle1;
    if (middle2.length > longest.length) longest = middle2;
  }

  return longest;
};

console.log(longestPalindrome("babad"));
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
