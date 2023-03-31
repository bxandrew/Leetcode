// Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

// For example, given:

// [2, 4, 5, 12, 7]

// The maximum non-adjacent sum is 16, because 4 + 12.
// 4 and 12 are not adjacent in the array.

// Input: An array of nums
// Output: Max sum of non adjacent elements (similar to houseRobber problem)

// Strategy:
// Hold two pointers, prev1, prev2
// Evaluate if max of prev2 + current vs prev1 and then assign the position the value
// Move pointers forward

// Iterative solution similar to fib sequence
// const nonAdjacentSum = (nums) => {
//   let prev1 = 0;
//   let prev2 = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let current = Math.max(prev2 + nums[i], prev1);
//     prev2 = prev1;
//     prev1 = current;
//   }

//   return prev1;
// };

const nonAdjacentSum = (nums, index = 0, memo = {}) => {
  if (index in memo) return memo[index];
  if (index >= nums.length) return 0;

  const take = nums[index] + nonAdjacentSum(nums, index + 2, memo); // Add current value to the sum of the later calls
  const skip = nonAdjacentSum(nums, index + 1, memo); // Don't add and continue on

  const maxValue = Math.max(take, skip);
  memo[index] = maxValue;
  return memo[index];
};

const nums = [2, 4, 5, 12, 7];
nonAdjacentSum(nums); // -> 16
