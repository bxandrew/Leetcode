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

// Goal is to add up to 0 (triplets)

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const results = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (i > 0 && current === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      if (nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

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

// console.log(threeSum([0, 0, 0, 0]));
// console.log(twoSum([0, 1, 2, 3, 4], 4));

const test = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(test);
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
