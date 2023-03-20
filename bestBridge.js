// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

// Input: A grid (grid-graph)
// Output: Number representing shortest bridge

// Strategy:
// BFS approach to find the closest next new land peice
// Only two islands so first thing to do it to iterate until we find one island (mark all the land peices in our island)
// After we have found all of our land pieces of the first island, place them into the queue.
// Do a bfs traversal until we have found a land piece that was not in our original first main island

// Time Complexity: O(r * c) Need to traverse every single point
// Space Complexity: O(r * c) Need to store every single traversed point
const bestBridge = (grid) => {
  const mainIsland = new Set();
  // Iterate through every position until we find our first island, then traverse and mark the island as our main island
  for (let r = 0; r < grid.length; r++) {
    let found = false;
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "L") {
        //Traverse and mark the main island
        traverseIsland(grid, r, c, mainIsland);
        found = true;
        break;
      }
    }
    if (found === true) {
      break;
    }
  }

  const visited = new Set(mainIsland);
  // After we have found all starting positions of the land, place them into our queue with a distance of 0
  const queue = [];
  for (let node of mainIsland) {
    const [a, b] = node.split(",");
    queue.push([Number(a), Number(b), 0]); // [row, col, distance]
  }

  // Queues starting positions: [ [ 0, 3, 0 ], [ 0, 4, 0 ], [ 1, 4, 0 ], [ 2, 4, 0 ] ]
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    const pos = row + "," + col;

    // Check if the current position is a land piece not in our main island
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1;

    // Else, check it's neighbors and if they have been visited and add them to the queue if they have not been visited
    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;
      const pos = neighborRow + "," + neighborCol;
      const rowInbounds = neighborRow >= 0 && neighborRow < grid.length;
      const colInbounds = neighborCol >= 0 && neighborCol < grid[0].length;
      if (rowInbounds && colInbounds && !visited.has(pos)) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(pos);
      }
    }
  }
};

// Purpose of traverse island is to mark the first island we encounter and place all positions in our mainIsland set
const traverseIsland = (grid, r, c, mainIsland) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return;

  if (grid[r][c] === "W") return;

  const pos = r + "," + c;
  if (mainIsland.has(pos)) return;
  mainIsland.add(pos);

  // Explore all neighbors of current position
  traverseIsland(grid, r + 1, c, mainIsland);
  traverseIsland(grid, r - 1, c, mainIsland);
  traverseIsland(grid, r, c + 1, mainIsland);
  traverseIsland(grid, r, c - 1, mainIsland);

  return;
};

const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); // -> 1
