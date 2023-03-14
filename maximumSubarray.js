// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: An array of nums
// Output: Max sum number

// Strategy:
// Have a largest sum variable
// Have a current sum variable

// If you add the next number and its negative, reset the sum
// When resetting the sum, eval the largest sum

// Time complexity: O(n)
// Space complexity: O(1)

var maxSubArray = function (nums) {
  let largestSum = -Infinity;
  // let previousSum = 0;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Add the current number to our sum
    currentSum += nums[i];

    // Evaluate the current sum to the largest sum
    if (currentSum > largestSum) {
      largestSum = currentSum;
    }

    // If the current sum is less than 0, reset sum
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return largestSum;
};

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
// console.log(maxSubArray(nums)); // 6
// nums = [5, 4, -1, 7, 8]; // 23
// console.log(maxSubArray(nums)); // 23
