// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Input: An array of coins and a target amount to get to
// Output: Number of coins it takes to get to target amount (min number of coins)

// Strategy:
// We want to find the shortest path to the amount reaching 0
// Try to use BFS approach
// Start with [amount, 0] in queue and bfs traversal using the deltas of each coin as the next amount
// Check if amount is 0, if it is return the number of coins
// Add neighbors onto queue if the amount is >= 0;
// Use a visited set to cache previous calculated results.

// var coinChange = function (coins, amount) {
//   let minCoins = Infinity;
//   const visited = new Set(); // So we don't have to recalculate previous values we have reached (if we have reached it already with a bigger coin)

//   const queue = [[amount, 0]];
//   while (queue.length > 0) {
//     const [currAmount, count] = queue.shift();
//     if (currAmount === 0 && count < minCoins) minCoins = count;

//     for (let coin of coins) {
//       const nextAmount = currAmount - coin;
//       if (nextAmount >= 0 && !visited.has(nextAmount)) {
//         queue.push([nextAmount, count + 1]);
//         visited.add(nextAmount);
//       }
//     }
//   }

//   if (minCoins === Infinity) return -1;
//   return minCoins;
// };

const coinChange = (coins, amount, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  const paths = [];
  for (let coin of coins) {
    const path = 1 + coinChange(coins, amount - coin, memo);
    if (path > 0) {
      paths.push(path);
    }
  }

  if (paths.length === 0) {
    memo[amount] = -1;
    return memo[amount];
  }

  memo[amount] = Math.min(...paths);
  return memo[amount];
};

console.log(coinChange([1, 2, 5], 11));
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
