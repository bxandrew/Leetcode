// Given a string s, find the length of the longest
// substring
//  without repeating characters.

//  Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */

// Input: String
// Output: number

// Strategy: Use a set to store current unique values
// Iterate through the string and check if char is in our set, if it is not, add it to our set.
// If it is in our set, eval curr set size to our longest (assign larger)
// Then initialize a new set and add our char in

// Naive approach, O(n^2)
// Iterate through our string
// For each char, build the longest string until a repeat shows up, store the length
// Continue to next char

// Personal Time: 16 mins for O(n^2) brute force approach

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let currSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!currSet.has(s[i])) {
      currSet.add(s[i]);
    }
    for (let j = i + 1; j < s.length; j++) {
      if (!currSet.has(s[j])) {
        currSet.add(s[j]);
      } else {
        // Evaluate the longest and then reset the set.
        longest = currSet.size > longest ? currSet.size : longest;
        currSet = new Set();
        break;
      }
    }
  }

  // Do one last evaluation after the loop ends.
  longest = currSet.size > longest ? currSet.size : longest;
  return longest;
};

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
// 1
