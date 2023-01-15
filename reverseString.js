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

//---- Using the middle index as the base case ----//

// const reverseString = function(s, index = 0) {
//   if (index === Math.floor(s.length / 2)) {
//     return; // Once we reach middle index, return out
//   }
//   // Swap syntax (via ES6 destructuring) //
//   [ s[index], s[s.length - 1 - index] ] = [ s[s.length - 1 - index], s[index] ];
//   // Recursively call our function //
//   reverseString(s, index+1);
// }


//---- Using two pointers (One on the front, one on the back) ----//

// Front represents the front pointer index (Default set to index 0)
// Back represents the back pointer index (Default set to index -1 (or s.length - 1))
const reverseString = (s, front = 0, back = s.length - 1) => {
  // Basecase for two pointers is if the front is now greater than the back, we have reached the middle.
  if (front > back) {
    return;
  }
  // Swap according to the two pointers
  [ s[front], s[back] ] = [ s[back], s[front] ]

  //Recursively call the function here
  reverseString(s, front+1, back-1);
}

let s = ["h","e","l","l","o"];
// let s = ["H","a","n","n","a","h"]

console.log('S before: ', s); //before
reverseString(s);
console.log('S after: ', s); //after
