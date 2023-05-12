// 518. Coin Change II

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// Strategy:
// Recursive decision tree to either take or not take the current coin (first coin of the array)
// If we take the current coin, we can pass the same index back into the recursive tree
// If not, we advance the index and recurse down the decision tree
// Once we have finished recursing down, add up the paths as we bubble up
// Use memoization to reduce time complexity

var change = function (amount, coins, index = 0, memo = {}) {
  const key = amount + "," + index;
  if (key in memo) return memo[key];

  if (index === coins.length) return 0;
  if (amount === 0) return 1;
  if (amount < 0) return 0;

  const currCoin = coins[index];
  const take = change(amount - currCoin, coins, index, memo);
  const donttake = change(amount, coins, index + 1, memo);

  memo[key] = take + donttake;
  return memo[key];
};
