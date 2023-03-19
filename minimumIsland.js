// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

// Input: 2d array representing a grid (grid-graph)
// Output: The size of the smallest island

// Strategy:
// Similar to islandCount, this time we will have to do island count but also evaluate the size of the current island we are traversing
// Basic strategy is to iterate through every position (node) in the grid graph
// Traverse it if it is a new piece of land
//  The traversal will eventually return the size of the land
//    Compare the size with our current stored smallest island size

// Time Complexity: O(n^2) have to explore every position
// Time Complexity: O(r * c) which is O(n^2) because we have to store the visited positions

const minimumIsland = (grid) => {
  const visited = new Set();
  let smallest = Infinity;

  // Iterate through every position in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = explore(grid, row, col, visited);
      // Small check here if island is of size 0, invalid island
      if (size < smallest && size !== 0) {
        smallest = size;
      }
    }
  }

  return smallest;
};

const explore = (grid, row, col, visited) => {
  // Check bounds
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  // Check water
  if (grid[row][col] === "W") return 0;

  // Check if visited
  const position = row + "," + col;
  if (visited.has(position)) return 0;
  visited.add(position);
  let size = 1;

  // Explore the island
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);

  // Finally return island size.
  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
