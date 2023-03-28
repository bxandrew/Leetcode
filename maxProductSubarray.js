// Given an integer array nums, find a
// subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: An array of nums
// Output: The largest product of concurrent numbers (sub arrays)

// Strategy:
// When reaching a 0, resets both streaks (min and max)
// When reaching a negative number, resets only max streak
// Keep a running variable for both min and max
// Min will always be assigned the lowest value between (current, current*max, current*min)
// Max will always be assigned the max value between (current, current*max, current*min)
// Evaluating a running min / max will allow us to pass both situations where there is negative numbers and if it is a 0 (resets score)

var maxProduct = function (nums) {
  let resultMax = nums[0];

  let runningMax = nums[0]; // 2
  let runningMin = nums[0]; // 2
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    // Keep a temp so we can evaluate runningMax and runningMin accurately
    const tempMax = runningMax;
    const tempMin = runningMin;

    runningMax = Math.max(current, tempMax * current, tempMin * current);
    runningMin = Math.min(current, tempMax * current, tempMin * current);

    // Evaluate our resultMax
    resultMax = Math.max(runningMax, runningMin, resultMax);
  }

  return resultMax;
};

const nums = [-2, -1, 1, 1];
console.log(maxProduct(nums));

//min(current, runningMax, runningMin)
//max(current, runningMax, runningMin)

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
