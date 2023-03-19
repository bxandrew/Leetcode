// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

// Input: A grid (grid-graph)
// Output: The distance to the closest carrot marked "C"

// Strategy:
// Since this is trying to find the closest carrot position to the starting position, we should use a BFS approach
// Implement a BFS using a queue
// The first time we encounter the carrot will mean it's the closest carrot, therefore immediately return the distance.
// If we have finished our BFS traversal and we have not found a carrot, return -1
// Establish a visited set to prevent infinite loops

// Time Complexity: O(r * c) because worse case scenario, we have to traverse every node
// Space Complexity: O(r * c) because worse case scenario, we have to store every node we visited

// const closestCarrot = (grid, startRow, startCol) => {
//   const visited = new Set();

//   const queue = [[startRow, startCol, 0]]; // [position, distance]
//   while (queue.length > 0) {
//     const [currRow, currCol, distance] = queue.shift();

//     // Check if inbounds
//     const rowInbounds = currRow >= 0 && currRow < grid.length;
//     const colInbounds = currCol >= 0 && currCol < grid[0].length;
//     if (!rowInbounds || !colInbounds) continue;

//     if (grid[currRow][currCol] === "X") continue; // If it is a wall, continue on

//     if (grid[currRow][currCol] === "C") return distance; // We have found our closest carrot

//     // Check if we have visited this position before
//     const position = currRow + "," + currCol;
//     if (visited.has(position)) continue;
//     visited.add(position);

//     // Add our neighbors into the queue
//     queue.push([currRow, currCol - 1, distance + 1]);
//     queue.push([currRow, currCol + 1, distance + 1]);
//     queue.push([currRow - 1, currCol, distance + 1]);
//     queue.push([currRow + 1, currCol, distance + 1]);
//   }

//   return -1;
// };

const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set([startRow + "," + startCol]);

  const queue = [[startRow, startCol, 0]];
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === "C") return distance;

    // Using a deltas array strategy
    const deltas = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]; // Representing left, right, top, bottom
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;
      // Check our bounds
      const rowInbounds = neighborRow >= 0 && neighborRow < grid.length;
      const colInbounds = neighborCol >= 0 && neighborCol < grid[0].length;
      const position = neighborRow + "," + neighborCol;

      // If next position is inbounds and not a wall ("X") and also not visited
      if (
        rowInbounds &&
        colInbounds &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(position)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(position);
      }
    }
  }

  return -1;
};

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4
