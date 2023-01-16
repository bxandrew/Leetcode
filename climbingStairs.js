// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


/**
 * @param {number} n
 * @return {number}
*/

// Strategy:
// nStairs is the same pattern as fibonacci
// How I understand the climbing stairs pattern is that it is the addition of how many ways to get to the n-1 and n-2 stair
// It is just one more step from those stairs that will get you to your desired step (n-2 takes a 2-step leap), (n-1 takes a 1-step leap)
// Add those two together and you will get the ways to reach your current stair
// Fibonacci sequence

// Two base cases here, first step will always have 1 way (1)
// second step will always have 2 ways (1-1, 2)

// Time Complexity: O(2^n)
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 2) + climbStairs(n - 1);
};

// Memoized Recursive Function //

const memoClimbStairs = (n) => {
  const cache = {};

  const climbStairs = (n) => {
    if (cache[n] !== undefined) return cache[n];
    if (n === 1) return 1;
    if (n === 2) return 2;

    cache[n] = climbStairs(n-2) + climbStairs(n-1);

    return cache[n];
  }

  return climbStairs(n);
}

// Dyamic Programming Function //
const dpClimbStairs = (n) => {
  const results = [1, 2];

  //iterate up to and including our n and solve it in place with our results array
  for (let i = 2; i < n; i++) {
    results[i] = results[i-2] + results[i-1];
  }

  // the step we are looking for is going to be in our 0-indexed result
  // subtract one from n to get the result we are looking for
  return results[n-1];
}

// Iterative approach //
// Use two pointers (one for prev and one for prevprev step)
const iClimbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  //starting at step 3 prev1 is 2, prev2 is 1
  let prev2 = 1;
  let prev1 = 2;

  //starting from step 3 (i = 2) iterate forward to our n-th step
  for (let i = 2; i < n; i++) {
    let currStep = prev2 + prev1;
    prev2 = prev1;
    prev1 = currStep;
  }

  return prev1;
}

console.log(iClimbStairs(3)); // 3 ways
console.log(iClimbStairs(4)); // 5 ways