// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Input: mat = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ];
// Output: [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ];

// Input: mat = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ];
// Output: [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 2, 1],
// ];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// https://leetcode.com/problems/01-matrix/editorial/

// Input: matrix
// Output: matrix updated with number of steps needed to reach 0 from position

// Strategy:
// Check current value, if it is 0, move onto the next position
// If the current value is not 0
//   Check left, top, right, and bottom of current matrix position for a 0, if there is a 0, change value to 1
//   If there is no 0's near it, add 1 to the current position.

// Leetcode Algorithm explanation:
// We can use dynamic programming to find out the distance to the closest 0 based on the neighbors value + 1
// If the current value is not 0, check your min value of your neighbors and add 1 to it.
// Using this method, we have to iterate through our matrix twice. One going top down (iterating cols to the right) and checking
//  only neighbors that are already calculated (in this case only top and left will be calculated).
// Then iterate about from bottom to top (iterating cols to the left) and checking only neighbors that are calced
//    (neighbors calced will be right and bottom)

// Time Complexity: O(n^2) or O(rows * cols)
// Space Complexity: O(1)

var updateMatrix = function (mat) {
  // Iterate through our matrix

  // Helper function to check the tiles
  const check = (mat, row, col) => {
    if (row < 0 || row >= mat.length || col < 0 || col >= mat[0].length)
      return Infinity;

    return mat[row][col];
  };

  // Iterate top down (right)
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      // Check only top and left values to determine current value
      // If the current value is not 0
      if (mat[row][col] !== 0) {
        const top = check(mat, row - 1, col);
        const left = check(mat, row, col - 1);
        // On first pass, just evaluate the top and left
        mat[row][col] = Math.min(top + 1, left + 1);
      }
    }
  }

  // Iterate bottom up (left)
  for (let row = mat.length - 1; row >= 0; row--) {
    for (let col = mat[row].length - 1; col >= 0; col--) {
      if (mat[row][col] !== 0) {
        const bottom = check(mat, row + 1, col);
        const right = check(mat, row, col + 1);

        // On second pass, we can evaluate the tile itself because it was evaluated when we passed it during the first iteration
        mat[row][col] = Math.min(bottom + 1, right + 1, mat[row][col]);
      }
    }
  }

  return mat;
};

// Input
// [
//   [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
//   [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//   [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
//   [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
//   [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
// ];

// Expected Output
// [
//   [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
//   [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//   [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
//   [1, 0, 0, 0, 1, 2, 1, 1, 0, 1],
//   [2, 1, 1, 1, 1, 2, 1, 0, 1, 0],
//   [3, 2, 2, 1, 0, 1, 0, 0, 1, 1],
// ];

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(mat));
// Output: [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 2, 1],
// ];
