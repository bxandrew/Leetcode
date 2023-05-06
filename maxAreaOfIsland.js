// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Strategy:
// Grid graph traversal problem
// Will need to iterate through each position of the graph
// At each point, if it is land start traversal to count size of island
// Make a helper function to do the dfs traversal that will count size of island
// Basecase if out of bounds, dont count(return 0)
// if is not land (is value 0) return 0
// if is land (value 1) return 1
// Have max value logic for max island size from dfs traversal returns
// Return max size of island

var maxAreaOfIsland = function (grid) {
  const visited = new Set();

  let maxSize = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const pos = row + "," + col;
      if (!visited.has(pos) && grid[row][col] === 1) {
        const result = findSize(grid, row, col, visited);
        maxSize = Math.max(maxSize, result);
      }
    }
  }

  return maxSize;
};

const findSize = (grid, r, c, visited) => {
  const pos = r + "," + c;
  if (visited.has(pos)) return 0;

  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 0) return 0;

  visited.add(pos);
  let count = 1;

  const deltas = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let delta of deltas) {
    const [rowDelta, colDelta] = delta;
    const newRow = r + rowDelta;
    const newCol = c + colDelta;
    count += findSize(grid, newRow, newCol, visited);
  }

  visited[pos] = count;
  return count;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid)); // 6
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
