// 494. Target Sum

// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// Example 2:

// Input: nums = [1], target = 1
// Output: 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Strategy:
// Classic decision tree problem
// At each position (element) in the array, we either have the choice to add it to the target or subtract to the target
// Basecase is if we finish iterating through the nums
// If we have a target of 0 then return 1 (valid path)
//  else return 0 (invalid path)
// Reduce time complexity from exponential O(2^n) to multilinear O(t * n) time complexity via memoization

var findTargetSumWays = function (nums, target, index = 0, memo = {}) {
  const pos = target + "," + index;
  if (pos in memo) return memo[pos];
  if (index === nums.length) {
    if (target === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  const current = nums[index];
  const add = findTargetSumWays(nums, target + current, index + 1, memo);
  const subtract = findTargetSumWays(nums, target - current, index + 1, memo);

  memo[pos] = add + subtract;
  return memo[pos];
};

// const nums = [1, 1, 1, 1, 1];
// const target = 3;
// console.log(findTargetSumWays(nums, target));
// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
