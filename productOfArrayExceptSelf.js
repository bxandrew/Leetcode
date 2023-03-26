// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input: An array of nums
// Output: An array of resulting products (w/o self)

// Strategy:
// We can break the problem down into the product of the left side vs right side at any given position
// Iterate through the input nums array, building a left/right product array as we iterate.
// Finally multiply each position at the left and right arrays together and return that array output

var productExceptSelf = function (nums) {
  const leftProducts = [];
  const rightProducts = [];

  // Fill left products array
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0) leftProducts[i] = 1;
    leftProducts[i + 1] = nums[i] * leftProducts[i];
  }

  // Fill right products array
  for (let i = nums.length - 1; i > 0; i--) {
    if (i === nums.length - 1) rightProducts[i] = 1;
    rightProducts[i - 1] = nums[i] * rightProducts[i];
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};

productExceptSelf([1, 2, 3, 4]);
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
