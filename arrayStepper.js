// // Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

// For example, given:

// idx =  0  1  2  3  4  5
// numbers = [2, 4, 2, 0, 0, 1]

// The answer is true.
// We start at idx 0, we could take 1 step or 2 steps forward.
// The correct choice is to take 1 step to idx 1.
// Then take 4 steps forward to the end at idx 5.

// Input: An array of nums
// Output: Boolean representing if you can reach the last position the array with the values held inside (can you get to nums.length-1)

// Strategy:
// Basecase should be if our index is at the last position, return true
// Then iterate through the value of steps at our current position (nums[index] represents steps we can take)
// If we ever find ourself at the last postiion (nums.length-1) return true
// Else if we iterate though the indicies and we never return true, return false

const arrayStepper = (nums, index = 0, memo = {}) => {
  if (index in memo) return memo[index];
  if (index >= nums.length - 1) return true;

  const steps = nums[index]; // Max number of steps

  for (let i = 1; i <= steps; i++) {
    if (arrayStepper(nums, index + i, memo)) {
      memo[index] = true;
      return true;
    }
  }

  memo[index] = false;
  return memo[index];
};
