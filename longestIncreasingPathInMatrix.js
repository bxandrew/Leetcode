Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

/**
 * @param {number[][]} matrix
 * @return {number}
 */

// Strategy:
// Need to iterate through every position in the matrix
// Find the longest path at each point
// Helper function to traverse the point with dfs, returns max path of current point
//  Eval the max between neighbors and choose the best path
//  Add 1 (self) to the max neighbor path and return up
// Hold max value logic while we iterate through each point
// Use memoization to reduce time complexity from duplicate problems


var longestIncreasingPath = function(matrix) {
  let longest = -Infinity;
  const memo = {};

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const result = maxPath(matrix, row, col, null, memo);
      longest = Math.max(longest, result);
    }
  }

  return longest;
};

// Purpose is to find maxPath via dfs
const maxPath = (grid, row, col, prev = null, memo) => {
  const pos = row + ',' + col + ',' + prev;
  if (pos in memo) return memo[pos];

  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  let pathSize = 0;

  const currValue = grid[row][col];
  if (prev === null || currValue > prev) {
    pathSize += 1;
  } else {
    return 0;
  }

  const deltas = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
  const pathValues = [];

  for (let delta of deltas) {
    const [ rowDelta, colDelta ] = delta;
    const newRow = row + rowDelta;
    const newCol = col + colDelta;
    const result = maxPath(grid, newRow, newCol, currValue, memo);
    pathValues.push(result);
  }

  memo[pos] = 1 + Math.max(...pathValues);
  return memo[pos];
}

// const matrix = [[9,9,4],[6,6,8],[2,1,1]]
// console.log(maxPath(matrix, 2, 1));

