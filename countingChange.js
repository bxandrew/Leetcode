// Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

// You may reuse a coin as many times as necessary.

// For example,

// countingChange(4, [1,2,3]) -> 4

// There are four different ways to make an amount of 4:

// 1. 1 + 1 + 1 + 1
// 2. 1 + 1 + 2
// 3. 1 + 3
// 4. 2 + 2

// Input: target amount and an array of coins
// Output: Number of UNIQUE ways to get to the end result (0), no duplicates (1,1,2 is same as 1,2,1 or 2,1,1)

// Strategy:
// Choose our current coin
// Take one of the value of coin off amount and pass it down with the next index of coins to take
// Keep incrementing the number of the same coin until it is 0 or below
// Basecase to return is when the amount is 0 (return 1, valid path)
// If below zero, we went too far, return 0 (invalid path)
// Else keep subtracting more coins off
// Memoize to avoid exponential time

const countingChange = (amount, coins, index = 0, memo = {}) => {
  const key = amount + "," + index;
  if (key in memo) return memo[key];

  if (amount === 0) return 1;
  if (amount < 0) return 0;
  if (index > coins.length) return 0;

  let count = 0;
  const currCoin = coins[index];

  for (let qty = 0; qty * currCoin <= amount; qty++) {
    const remainder = amount - currCoin * qty;
    count += countingChange(remainder, coins, index + 1, memo);
  }

  memo[key] = count;
  return memo[key];
};

console.log(countingChange(4, [1, 2, 3, 4])); // ->
