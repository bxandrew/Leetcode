// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Strategy: Multiply x by n, n times
// Potentially use a tail recursive solution here
// Basecase is when n is 1, then just return x itself

// This fails if the input n is exponentially great (call stack exceeded);
// Let's try to turn it into a memoized version

// var myPow = function(x, n, cache = {}) {
//   debugger;
//   if (cache[n] !== undefined) return cache[n];
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   let result;

//   if (n < 0) {
//     n = Math.abs(n);
//     cache[n] = x * myPow(x, n-1, cache);
//     return 1 / cache[n];
//   }

//   cache[n] = x * myPow(x, n-1, cache);
//   return cache[n];
// };

// Attempt to do a dynamic programming approach (doesnt work bc we are buliding too long of an array);

// Attempt iterative approach to myPow
// var myPow = function(x, n) {
//   if (x === 1) return x; //edge cases
//   if (x === -1) return n % 2 === 0 ? 1 : x; //edge case for -1 and a very large n

//   if (n === 0) return 1;
//   let isNegative = false;
//   if (n < 0) {
//     n = Math.abs(n)
//     isNegative = true;
//   }
//   //have an array of the next numbers and iterate to the nth number
//   let result = 1; //start with n=0 basecase is 1
//   //still overflowing so maybe just reassign the number and iterate forward
//   for (let i = 1; i <= n; i++) {
//     result = result * x;
//   }

//   return isNegative ? (1 / result) : result;
// }

var myPow = (x, n) => {
  //basecases
  if (n === 0) return 1;
  if (n === 1) return x;

  let isNegative;
  if (n < 0) {
    n = -n;
    isNegative = true;
  }

  let result;
  if (n % 2 === 0) {
    let half = Math.floor(n / 2);
    result = myPow(x, half) ** 2; //myPow times itself (we remove any duplicate);
  } else {
    let half = Math.floor(n / 2);
    // let secondHalf = Math.ceil(n / 2);
    result = x * myPow(x, half) ** 2;
  }

  return isNegative ? 1 / result : result;
}

// x^n = (x^(n/2))^2 when n is even.
// x^n = x * (x^(n/2))^2 when n is odd. just take one exponent off then its even!


// SUPER INTERESTING APPROACH //
// 2^10 is = 2^5 * 2^5 or 2^5 ^ 2
// 2^11 is = 2 * 2^5 ^ 2

// console.log(myPow(2, 11));
// console.log(myPow(2, 10)); // 1024
// console.log(myPow(2, 5));
// console.log(myPow(2, 6));

// console.log(myPow(2, 10)); // should return 1024 or 2 x 2 x 2 ...
// console.log(myPow(2.1, 3)); // should return 1024 or 2 x 2 x 2 ...
// console.log(myPow(2, -2)); // 0.25
// console.log(myPow(2, -3)); // 1/8

// console.log(myPow(0.00001, 2147483647));