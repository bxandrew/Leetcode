// Given an integer array nums, return the length of the longest strictly increasing
// subsequence
// .

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: An array of nums
// Output: A number representing the longest sequence of increasing numbers

// Strategy:
// Use dp to keep a running count of the answers that we build upon

var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    let current = dp[i];

    // Loop through all previous values and see if we can append our number onto any of the prev values
    for (let j = 0; j < i; j++) {
      // Append and take the maximum of the current vs prev+1 (current changes per iteration)
      if (nums[j] < nums[i]) {
        current = Math.max(current, 1 + dp[j]);
      }
      // Set our current dp answer to current after we have checked all previous values
      dp[i] = current;
    }
  }

  // Return the max length answer in our dp array
  return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7])); // 3
