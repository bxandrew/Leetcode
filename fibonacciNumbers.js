// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

/**
 * @param {number} n
 * @return {number}
 */


// Strategy:
// Fib number is adding the previous two fib numbers together to equal your current fib number
// Fib 3 is the fib2 + fib1 number added together
// There are two base cases in the fibonacci sequence.
// Fib 0, is 0
// Fib 1 is 1
// Fib 2 is 1

//Therefore the fib sequence goes: [0, 1, 1, 2, 3, 5, 8, 13...]

// Simple recursive solution (niave solution)
// Add the previous two fib numbers together
// Downfalls to this approach without using memoization is there are many duplicate recursive calls when we have already calculated it once
// Improve this with memoization

// Time complexity: O(2^n)

// var fib = function(n) {
//   if (n === 0) return 0; //fib 0 is always 0
//   if (n === 1 || n === 2) return 1; //fib 1 and fib 2 are always 1

//   return fib(n-1) + fib(n-2);
// };

//---- Memoized Recursive version ----//
// Time complexity: O(n)
// Space Complexity: O(n)

// const memoFib = (n) => {
//   const cache = {};

//   //inner recursive function here
//   const fib = (n) => {
//     //first check our cache object to see if we have the result, if it does, just return the value
//     if (cache[n] !== undefined) return cache[n];
//     if (n === 0) return 0;
//     if (n === 1 || n === 2) return 1;

//     //set the result of calculating fib inside of our cache object
//     cache[n] = fib(n-1) + fib(n-2);
//     //return our value after we cache it
//     return cache[n];
//   }
//   return fib(n);
// }

//---- Dynamic Programming version of Fib ----//
// Time Complexity: O(n)
// Space Complexity: O(n)

// Strategy:
// Use an array to store the values of the calculated fib numbers as we iterate forward
// Then just return the number at the end
// Fib index# is the fib number so fib0 is 0 fib1 is 1 (1st fib number)
// Two base cases needed to calc fib number (number -1) and (number -2)
// Prefill our array with these two base cases and iterate forward to our n-th number

// const dpFib = (n) => {
//   const fibNums = [0, 1]; //contains our two base cases (fib0 and fib1);

//   //start iterating from fib2 all the way up to and including our n-th number
//   for (let i = 2; i <= n; i++) {
//     //calculate current fib number by adding the previous two numbers
//     fibNums[i] = fibNums[i-1] + fibNums[i-2];
//   }

//   //After we have finished iterating and generating our fib nums, return the corresponding fib num we were looking for
//   return fibNums[n];
// }

//---- Iterative Approach to Fib Nums ----//
// Time complexity: O(n)
// Space Complexity: O(1);

// Strategy:
// Have two pointers (in the form of variables), and move those pointers forward as we iterate and generate new fib numbers

const iFib = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let prev2 = 0 // n-2
  let prev1 = 1 // n-1

  //iterate here using those two numbers to generate a number up to our current n
  for (let i = 2; i <= n; i++) {
    let currFib = prev1 + prev2; //generate our current fib number by adding prev1 and prev2 (previous two numbers);
    //now move our pointers up, set our prev2 to be prev1
    //set our prev1 to be currfib and iterate through
    prev2 = prev1;
    prev1 = currFib;
  }

  //after finish iterating, our prev1 will be our correct fib number
  return prev1;
}


// console.log(fib(3)) // 2
// console.log(fib(4)) // 3
// console.log(fib(5)) // 5
console.log(iFib(6)) // 8