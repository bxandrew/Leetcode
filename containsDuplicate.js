// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Input: An array of nums
// Output: Boolean

// Strategy:
// Use an object to store number counts
// If any number stored has the value of 2, return out true

// Time Complexity: O(n)
// Space Complexity: O(n)

var containsDuplicate = function (nums) {
  const count = {};

  for (let num of nums) {
    if (count[num]) {
      return true;
    } else {
      count[num] = true;
    }
  }

  return false;
};
