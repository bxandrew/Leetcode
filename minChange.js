// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

// Input: An starting amount and an array of numbers representing coins
// Output: Minimum number of coins to make the target amount

// Strategy:
// Use a recursive decision tree (dynamic programming approach)
// Recursively iterate through the amounts by subtracting each coin in our coin bank
// Base case is if our amount is 0, return 0 (0 coins needed to acheive 0)
// If our amount is less than 0 it is unachievable (bad path)
// Use memoization to reduce time complexity from exponential

// Time Complexity: O(a * c) amount * coins
// Space Complexity: O(a * c) because of recursive calls and also the array of paths
// const minChange = (amount, coins, memo = {}) => {
//   if (amount in memo) return memo[amount];
//   if (amount === 0) return 0;
//   if (amount < 0) return -1;

//   const paths = [];
//   for (let coin of coins) {
//     const result = minChange(amount - coin, coins, memo);
//     if (result !== -1) {
//       // If a valid path, store it in our paths array
//       // Remember to add one to the result to represent our current coins needed. 1 + amount of coins needed for neighbor node
//       paths.push(1 + result);
//     }
//   }

//   // If path's array is empty then none of the paths were valid, return -1
//   if (paths.length === 0) {
//     memo[amount] = -1;
//     return memo[amount];
//   }

//   // Otherwise, store the current number of coins needed (steps of path or edges in the tree)
//   memo[amount] = Math.min(...paths);
//   return memo[amount];
// };

// Time Complexity: O(a * c)
// Space Complexity: O(a)
const minChange = (amount, coins) => {
  const minCoins = findMin(amount, coins);
  return minCoins === Infinity ? -1 : minCoins;
};

const findMin = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;

  let min = Infinity;
  for (let coin of coins) {
    const result = findMin(amount - coin, coins, memo);
    min = Math.min(1 + result, min);
  }

  memo[amount] = min;
  return memo[amount];
};

minChange(13, [1, 9, 5, 14, 30]); // -> 5
