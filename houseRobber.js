// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: an array of nums representing houses
// Output: max number from robbing houses

// Strategy:
// Recursively explore all paths robber can take
// Memoize to reduce time complexity (remove duplicate sub problems)
// Path will be current amount (at current house) and the max of the rest of the houses (slice+2)

var rob = function (nums, memo = {}) {
  const pos = nums.join("");
  if (pos in memo) return memo[pos];
  if (nums.length === 0) return 0;

  let maxStack = 0;

  for (let i = 0; i < nums.length; i++) {
    const currStack = nums[i] + rob(nums.slice(i + 2), memo);
    maxStack = Math.max(currStack, maxStack);
  }

  memo[pos] = maxStack;
  return memo[pos];
};

console.log(rob([2, 7, 9, 3, 1]));
// Input: nums = [1,2,3,1]
// Output: 4
// Input: nums = [2,7,9,3,1]
// Output: 12
