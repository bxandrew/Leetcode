// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];
// Output: 4;

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Input: 2d grid (grid-graph)
// Output: Number of mins it takes to turn all oranges rotten (Longest path in graph)

// Strategy:
// Iterate through all positions of the grid
//    Count the number of fresh oranges (to do a final check later)
//    Also if any rotten oranges are found (2's), place them in our queue

// After finding all rotten oranges and fresh oranges count -> do a BFS traversal using the queue
// In the queue store the [row, col, distance] (starting at 0)
// Keep a visited set to prevent infinite loops and backtracking
// Also keep a longest distance variable to compare to in each loop
// If the element is a fresh orange (1's) turn it to 2 (rotten orange) and then decrement orange count

// At the end if there are fresh oranges remaining, return -1 (could not reach via bfs from any rotten oranges)
// If there are none, return the longest path

// Time Complexity: O(n * m) where n is the rows and m is the cols
// Space Complexity: O(n * m) We have to store the position of each node we visit
var orangesRotting = function (grid) {
  let orangeCount = 0;
  let longestDistance = 0;
  const visited = new Set();
  const queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col, 0]); // Add rotten orange to our queue to do BFS traversal
        const pos = row + "," + col;
        visited.add(pos); // Add the rotten orange position to the visited set
      } else if (grid[row][col] === 1) {
        orangeCount += 1; // Increment our fresh oranges count
      }
    }
  }

  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]; // Directions for traveling down, up, right, left in a grid graph

  // Now do a BFS traversal using the queue
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    // Starting with our current orange
    if (distance > longestDistance) longestDistance = distance;
    if (grid[row][col] === 1) orangeCount--;

    // Throw neighbors into the queue if it is a fresh orange
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;

      const rowInbounds = neighborRow >= 0 && neighborRow < grid.length;
      const colInbounds = neighborCol >= 0 && neighborCol < grid[0].length;
      const neighborPos = neighborRow + "," + neighborCol;
      // If inbounds and not visited and is a fresh orange
      if (
        rowInbounds === true &&
        colInbounds === true &&
        !visited.has(neighborPos) &&
        grid[neighborRow][neighborCol] === 1
      ) {
        // Throw into queue with distance + 1 and also mark visited now
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(neighborPos);
      }
    }
  }

  return orangeCount === 0 ? longestDistance : -1;
};
