// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:
// Input: nums = [1,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: an array of nums
// Output: A max value robbed from array of houses

// Strategy:
// Since the houses are in a loop, you can either only rob from the range of houses from 0 to 1 from the last or 1 to last house.
// Represented as 0 -> length - 2 or 1 -> length -1
// Find the max amount from those two arrays
// The base problems is, max amount from 1 house is itself
// Max amount from no houses is 0
// Max amount from two houses is the max between them
// Max amount between three or more is outer vs inner

var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const max1 = robHelper(nums, 0, nums.length - 2);
  const max2 = robHelper(nums, 1, nums.length - 1);

  return Math.max(max1, max2);
};

// [] // [] // []
// r2    r1   curr
var robHelper = function (nums, start, end) {
  // Robbers are running total of maximum you can get at a certain house thus fur
  let robber1 = 0; // Goes first (represents the middle of the outer pair)
  let robber2 = 0; // Behind first (represents the left of the outer pair)

  for (let i = start; i <= end; i++) {
    const current = nums[i]; // Represents the right of the outer pair
    const temp = robber1;

    // Decide here if outer is greater than middle
    robber1 = Math.max(current + robber2, robber1);
    robber2 = temp;
  }

  return robber1;
};

// console.log(rob([1]));
console.log(
  rob([
    94, 40, 49, 65, 21, 106, 80, 92, 81, 679, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 12, 12, 31, 41, 15, 16, 16, 1, 616, 16, 16, 16, 16, 16, 16, 16,
  ])
);
// Input: nums = [1,2,3,1]
// Output: 4
