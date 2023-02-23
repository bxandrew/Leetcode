// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.



// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */

// Strategy:
// Iterate through the string and count each char
// Output is always 1 since a string is always 1 letter
// Increase output if there is any even values in counter of char
// Increase by the even value
// Return output at end
var longestPalindrome = function(str) {
  let output = 0;
  const chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1; // If chars[char] exists, add 1, else default to 1
  }

  // also find the highest odd number and put it in the middle;
  let highestOdd = 0;
  let hasOdd = false; // Odd check is for edge case, our first odd gets the full count
  for (let char in chars) {
    // If the current value is even, add it onto output
    if (chars[char] % 2 === 0) {
      output += chars[char];
    } else {
      // Else it is odd and add the total - 1 onto our output;
      output += chars[char] - 1;
      hasOdd = true;
    }
  }
  if (hasOdd) {
    output += 1;
  }
  return output;
};

// console.log(longestPalindrome("aaaAaaaa")); // 7