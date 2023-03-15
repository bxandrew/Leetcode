// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Strategy:
// Brute force strategy is to test every single possible combination until we reach target, then return the index + 1 positions

// A better strategy: Iterate through the array of numbers and see if the combo number exists in our cache object. If it doesnt, keep the current number cached and then continue on

// MUST USE CONSTANT SPACE! (No objects)

// Have a pointer at the left, and a pointer at the right at the end of the array
// If the sum of the pointers is target, return the positions (+1 index)
// If the sum is greater than the target, move the right pointer down one (sorted arrays biggest numbers are on the right, we want to reduce it so we move the right pointer to the left by one)
// If the sum is smaller than the target, we need a higher value (move the left pointer up one)

// Time Complexity: O(n)
// Space Complexity: O(1)

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];

    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
// Input: [2,7,11,15] target = 9
// Output: [1,2]
