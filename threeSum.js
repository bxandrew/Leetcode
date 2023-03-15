// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Input: An array of numbers
// Output: A 2d array of groups of 3 nums that equal to 0

// Strategy:
// Sort the array of nums
// The duplicate numbers will be next to each other in sorted array, (check if curr number is same as previous)
// If so, iterate to the next number

// Make use of two points similar to twoSums (a low pointer and a high pointer) (left and right)
// With the third pointer being the current iterated value in our array of numbers
// Now for each iteration, do an inner loop that utilizes the lo and high pointers along with the current iterated value to see the target.
// Once left and past right or (right has past left), continue and iterate to the next element.

// Time Complexity: O(n^2)
// Space Complexity: O(n)

var threeSum = function (nums) {
  const results = [];

  nums.sort((a, b) => a - b); // Sort in ascending order
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (i > 0 && current === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    // Two sums algorithm with a check to see if the elements have already appeared (because they are sorted check the element behind them)
    while (right > left) {
      if (nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      // Extra edge case, if the left pointer is at the position right next to our current, dont do the check for unique
      // Only check for unique after we have iterated past
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }

      if (current + nums[left] + nums[right] === 0) {
        results.push([current, nums[left], nums[right]]);
        right--;
        left++;
      } else if (current + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return results;
};

const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [-2, 0, 0, 2, 2];
// const nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
// const nums = [0, 0, 0, 0];
console.log(threeSum(nums));
// Output: [[-1,-1,2],[-1,0,1]]
