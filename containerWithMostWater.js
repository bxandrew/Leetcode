// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */

// index is the x position
// height[index] is the y position

// Strategy:
// Use two pointers to keep track of the edges of the two boxes
// Move the shorter height of the two pointers over by one until they pass each other

var maxArea = function (height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const currArea = Math.min(leftHeight, rightHeight) * (right - left);
    max = Math.max(currArea, max);

    if (rightHeight < leftHeight) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};
