// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// Strategy:
// Brute Force strategy would be to iterate through every position and calculate if that position is valid by traversing through and seeing if it reaches both the pacific edge (row 0 || col 0) and also seeing if it can reach atlantic (row.length || row[0].length) (border positions)
// Better strategy would be to start at all border positions and find the tiles that can reach the current position
//  Eval current position is less than next position (means this route is valid, iterate through)
// Find all tiles that can reach the pacific, and all tiles that can reach the atlantic and hold them in a set
// Then iterate through one set and find positions that are in both sets,
// Return the parsed answer as a 2d array

var pacificAtlantic = function (heights) {
  const pacificTiles = new Set();
  const atlanticTiles = new Set();

  // Iterating through pacific border tiles
  for (let row = 0; row < heights.length; row++) {
    // mark pacific tiles (all rows, first col)
    traverse(heights, row, 0, pacificTiles);
    // mark atlantic tiles (all rows last col)
    traverse(heights, row, heights[0].length - 1, atlanticTiles);
  }

  for (let col = 0; col < heights[0].length; col++) {
    // mark pacific (first row, all cols)
    traverse(heights, 0, col, pacificTiles);

    // mark atlantic (last row, all cols)
    traverse(heights, heights.length - 1, col, atlanticTiles);
  }

  const results = [];
  for (let pos of atlanticTiles) {
    if (pacificTiles.has(pos)) results.push(pos);
  }

  return results.map((pos) => pos.split(",")); // splits string into array of elements "0,4" => [ "0", "4" ]
};

const traverse = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return;

  const pos = row + "," + col;
  if (visited.has(pos)) return;
  visited.add(pos);

  const currValue = grid[row][col];

  const deltas = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let delta of deltas) {
    const [rowDelta, colDelta] = delta;
    const newRow = row + rowDelta;
    const newCol = col + colDelta;
    const newRowInbounds = newRow >= 0 && newRow < grid.length;
    const newColInbounds = newCol >= 0 && newCol < grid[0].length;

    if (newRowInbounds && newColInbounds && currValue <= grid[newRow][newCol]) {
      traverse(grid, newRow, newCol, visited);
    }
  }

  return;
};
