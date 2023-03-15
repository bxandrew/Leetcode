// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: an array of nums
// Output: index of the two nums that add up to target

// Strategy:
// Use an object to store our currently iterated values and their indexs
// Subtract the value from our target and check if this exists in our object.
// If it doesnt keep iterating forward until you find the pair that does equal to our target
// Return the indexs of the two nums

var twoSum = function (nums, target) {
  const numCache = {};

  for (let i = 0; i < nums.length; i++) {
    // Add our current number into our cache
    if (numCache[target - nums[i]] !== undefined) {
      return [i, numCache[target - nums[i]]];
    }

    if (!numCache[nums[i]]) {
      numCache[nums[i]] = i;
    }
  }

  return;
};

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
