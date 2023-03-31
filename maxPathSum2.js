// Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

// You can assume that all numbers are non-negative.

// Input: 2d array representing a grid
// Output: Max value of path from top left to bottom right

// Strategy:
// Starting from the top left position (index 0, 0) evaluate recursive travel to the two paths available
// Store the max path for each position and return it back up
// Return the highest from the two paths plus itself

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + "," + c;
  if (pos in memo) return memo[pos]; // Return saved max value for current position

  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  if (r >= grid.length || c >= grid[0].length) return 0; // If out of bounds return 0 (path is 0)
  // Edge case, if there are negative numbers in the grid, we should return -Infinity instead.

  const right = maxPathSum(grid, r, c + 1, memo);
  const bottom = maxPathSum(grid, r + 1, c, memo);

  const currValue = grid[r][c];
  memo[pos] = currValue + Math.max(right, bottom);
  return memo[pos];
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];

console.log(maxPathSum(grid)); // -> 18
