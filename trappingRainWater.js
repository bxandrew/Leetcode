// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */

// Strategy:
// Algorithm is to find to find the the min of the max of left/right sections and then subtract the min by the current height to find how much water is contained at the current position
// Iterate through once going from 0 -> end to find the max left border at the given index (not including itself)
// Iterate backwards going from end -> 0 to find max right border at the given index (not including self)
// Then iterate through the height array keeping a count of how much water we can trap
//  determine at the current index which is least in maxLeft vs maxRight and subtract height by that min
//  Increment water by that amount (height[i] - Math.min(maxLeft[i], maxRight[i]))
// Return amount of water at the end

var trap = function (height) {
  const maxLeft = [];
  const maxRight = [];

  let runningLeft = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft[i] = runningLeft;
    runningLeft = Math.max(runningLeft, height[i]);
  }
  let runningRight = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight[i] = runningRight;
    runningRight = Math.max(runningRight, height[i]);
  }

  let count = 0;
  for (let i = 0; i < height.length; i++) {
    const water = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (water > 0) {
      count += water;
    }
  }

  return count;
};
