// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */

// Input: Grid graph
// Output: Number of islands in the grid graph

// Strategy:
// Iterate through every position in the grid graph
// Traverse through the neighbors of the grid graph (using DFS for this approach) until we have found all spots on the island
// Return out of the traversal once we have explored the island fully and increment our island counter

var numIslands = function (grid) {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const result = explore(grid, row, col, visited);
      if (result === true) count += 1;
    }
  }

  return count;
};

// Purpose of explore is to do a DFS traversal through the given point and mark spots visited
const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[row][col] === "0") return false;

  const pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  const deltas = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  for (let delta of deltas) {
    const [rowDelta, colDelta] = delta;
    const neighborRow = row + rowDelta;
    const neighborCol = col + colDelta;
    explore(grid, neighborRow, neighborCol, visited);
  }

  return true;
};

const test1 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(test1));
// Output: 3;
