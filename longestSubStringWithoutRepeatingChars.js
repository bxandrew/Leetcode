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

// var lengthOfLongestSubstring = function (s) {
//   let longest = 0;
//   let currSet = new Set();

//   for (let i = 0; i < s.length; i++) {
//     if (!currSet.has(s[i])) {
//       currSet.add(s[i]);
//     }
//     for (let j = i + 1; j < s.length; j++) {
//       if (!currSet.has(s[j])) {
//         currSet.add(s[j]);
//       } else {
//         // Evaluate the longest and then reset the set.
//         longest = currSet.size > longest ? currSet.size : longest;
//         currSet = new Set();
//         break;
//       }
//     }
//   }

//   // Do one last evaluation after the loop ends.
//   longest = currSet.size > longest ? currSet.size : longest;
//   return longest;
// };

// Approach using the Sliding Window approach
// Iterate through our string keeping track of the chars and their index position.
// Our left side of the window will be the first non repeating char
// Our right is the future non repeating chars

// If we find a repeating char, we slide our left side over to the repeating char index (+1) (essentially we want to slide over the repeated char)
// Also if we find a repeating char, eval the side of the current window before sliding over.

// Use two pointers to determine the left and right positions of the window (i, j)

// Time Complexity: O(n)
// Space Complexity: O(n)
const lengthOfLongestSubstring = (s) => {
  debugger;
  let longest = 0;
  // Initialize window pointers
  let chars = new Map(); // Keeps the char's index
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    // As we iterate also move our right pointer by one to the right
    // As we iterate, check to see if our char is in our chars map
    // If it is a unique char, add it into our map
    if (!chars.has(s[i])) {
      chars.set(s[i], i); // char, index
      right = i + 1;
    } else {
      // Edgecase, if the repeated char was to the left of our left pointer, simply just place our new char into our map and continue
      if (left > chars.get(s[i])) {
        chars.set(s[i], i); // Set the char in with our new index
        right = i + 1;
        continue;
      }

      // Evaluate our current longest subString by taking right - left
      longest = right - left > longest ? right - left : longest;
      // If it is not unique, we have to move the left pointer 1 ahead of the last time this char appeared
      left = chars.get(s[i]) + 1;
      chars.set(s[i], i); // Set the char in with our new index
      right = i + 1;
    }
  }

  longest = right - left > longest ? right - left : longest;
  return longest;
};

const s = "aabaab!bb";
console.log(lengthOfLongestSubstring(s));
// 3
