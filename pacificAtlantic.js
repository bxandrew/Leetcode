// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// Input: 2d grid graph
// Output: 2d array representing positions that can flow to both atlantic and pacific ocean

// Strategy:
// Pacific Ocean is represented as row/col === 0
// Atlantic Ocean is represented as row/col === length - 1

// Starting from those positions, dfs and find tiles that are greater than curr tile
// Visit them and add them to the visited set
// Combine the tiles present in both pacific and atlantic and return the tiles that are present in both

var pacificAtlantic = function (heights) {
  const pacificTiles = new Set();
  const atlanticTiles = new Set();

  for (let col = 0; col < heights[0].length; col++) {
    traverse(heights, 0, col, pacificTiles);
    traverse(heights, heights.length - 1, col, atlanticTiles);
  }

  for (let row = 0; row < heights.length; row++) {
    traverse(heights, row, 0, pacificTiles);
    traverse(heights, row, heights[0].length - 1, atlanticTiles);
  }

  const result = [];

  for (let pos of pacificTiles) {
    if (atlanticTiles.has(pos)) {
      result.push(pos.split(","));
    }
  }

  return result;
};

const traverse = (heights, row, col, visited) => {
  const pos = row + "," + col;
  if (visited.has(pos)) return;
  visited.add(pos);

  const currValue = heights[row][col];

  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    const [rowDelta, colDelta] = delta;
    const neighborRow = row + rowDelta;
    const neighborCol = col + colDelta;
    const rowInbounds = neighborRow >= 0 && neighborRow < heights.length;
    const colInbounds = neighborCol >= 0 && neighborCol < heights[0].length;
    if (
      rowInbounds &&
      colInbounds &&
      currValue <= heights[neighborRow][neighborCol]
    ) {
      traverse(heights, neighborRow, neighborCol, visited);
    }
  }
};

// console.log(
//   pacificAtlantic([
//     [6, 6],
//     [6, 6],
//   ])
// );

// console.log(
//   pacificAtlantic([
//     [1, 2, 2, 3, 5],
//     [3, 2, 3, 4, 4],
//     [2, 4, 5, 3, 1],
//     [6, 7, 1, 4, 5],
//     [5, 1, 1, 2, 4],
//   ])
// );
// [
//   [0, 4],
//   [1, 3],
//   [1, 4],
//   [2, 2],
//   [3, 0],
//   [3, 1],
//   [4, 0],
// ];
