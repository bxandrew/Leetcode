// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: an array of numbers
// Output: the majority element

// Strategy:
// Count all occurances of the nums in an object
// Iterate through our object and then find the highest value

// Time Complexity: O(n)
// Space Complexity: O(n)

var majorityElement = function (nums) {
  const numsCount = {};
  let highest = -Infinity;
  let highestElement;

  // Collect counts of our elements
  for (let num of nums) {
    numsCount[num] = numsCount[num] + 1 || 1;
  }

  // Find the number that appeared the most times
  for (let key in numsCount) {
    if (numsCount[key] > highest) {
      highest = numsCount[key];
      highestElement = key;

      // If the count is greater than half the length of the array, return out early (we have found our majority element)
      if (numsCount[key] >= nums.length / 2) {
        return Number(key);
      }
    }
  }

  return Number(highestElement);
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
