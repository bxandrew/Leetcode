// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

// Input: 2d array of W's and L's , (L's representing land, and W water);
// Output: # of islands in the 2d array

// Strategy:
// Be able to iterate through every point of the grid
// Be able to traverse all the land peices next to each other (use recursive dfs traversal for this, we just need to check every node thats connected)
// Also during traversal, we will need to do a visited set to make sure there are no cycles (infinite loops)
// Have a count for islands
// Increment this count after every full dfs traversal

// Time Complexity: O(n^2) specifically O(rols * cols)
// Space Complexity: O(n^2) because of recursively traversing through each position.

// const islandCount = (grid) => {
//   let islandCount = 0;
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] === "L") {
//         // If it is unfound land, dfs through it to find all connected land positions and then also increment our count after our dfs
//         traverse(grid, row, col);
//         islandCount++;
//       } else {
//         // Mark the position visited as we iterate past
//         grid[row][col] = "V";
//       }
//     }
//   }

//   return islandCount;
// };

// // Purpose of traverse is to find all connected L's and mark them visited
// const traverse = (grid, row, col) => {
//   // If out of range return out
//   if (row >= grid.length || row < 0 || col >= grid[row].length || col < 0) {
//     return;
//   }

//   if (grid[row][col] === "V") return; // If visited, return out to prevent infinite loop

//   // If water, mark visited and return out.
//   if (grid[row][col] === "W") {
//     grid[row][col] = "V";
//     return;
//   }

//   // Else mark the land as visited and iterate through
//   grid[row][col] = "V";

//   // Go through each neighbor and do a recursive call for each to find all lands connected
//   traverse(grid, row, col - 1); // left
//   traverse(grid, row, col + 1); // right
//   traverse(grid, row - 1, col); // top
//   traverse(grid, row + 1, col); // botoom
// };

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) === true) {
        count++;
      }
    }
  }

  return count;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[row][col] === "W") return false;

  const position = row + "," + col;
  if (visited.has(position)) return false;
  visited.add(position);

  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
