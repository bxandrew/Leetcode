// Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ];
// countPaths(grid); // -> 2

// Time Complexity: O(r * c) Need to traverse every position
// Space Complexity: O(r * c) Need to store every positions pathCount
const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  const pos = row + "," + col;
  if (pos in memo) return memo[pos];

  if (row === grid.length || col === grid[0].length || grid[row][col] === "X")
    return 0;
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

  const bottom = countPaths(grid, row + 1, col, memo);
  const right = countPaths(grid, row, col + 1, memo);

  memo[pos] = bottom + right;
  return memo[pos];
};
