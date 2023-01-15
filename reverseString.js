// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function(s, index = 0) {
  if (index === Math.floor(s.length / 2)) {
    return; // Once we reach middle index, return out
  }
  // Swap syntax (via ES6 destructuring) //
  [ s[index], s[s.length - 1 - index] ] = [ s[s.length - 1 - index], s[index] ];
  // Recursively call our function //
  reverseString(s, index+1);
}

let s = ["h","e","l","l","o"];

console.log('S before: ', s); //before
reverseString(s);
console.log('S after: ', s); //after
