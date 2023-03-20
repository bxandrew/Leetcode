// A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightAttack, that takes in 5 arguments:

// n, kr, kc, pr, pc

// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn
// The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.

// Input: Size of chess board and the position of both the knight and the pawn in row / col
// Output: Minimum number of steps to reach the pawn from current knight position

// Strategy:
// Trying to find shortest number of moves to the pawn so a BFS approach seems reasonable
// In the queue we use for BFS we will need to store the move number as well
// This is a type of grid-graph in where the neighbor position is 2 vertical away and 1 horizontal away.
// Starting at our knights current position in the queue with the move of 0
//  Iterate through the queue and add it's next possible move into the queue
//  Do conditional checks if we have found the pawn (return the number of moves)
//  If we have went out of bounds, continue on.
// Will also need a visited set to prevent back tracking and infinite loops

// Time Complexity: O(n^2) Worse case, we have to explore every position in the board to find the pawn
// Space Complexity: O(n^2) Worse case we have to save every position in our visited set.

const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set([kr + "," + kc]);

  const queue = [[kr, kc, 0]]; // Initialize our knights initial position [row, col, move#]
  while (queue.length > 0) {
    const [row, col, moveNumber] = queue.shift();
    const pos = row + "," + col;
    if (row === pr && col === pc) return moveNumber; // If we have reached our pawn's position return the moveNumber

    // Do a deltas array for all possible positions (2 rows up and down, 1 col left and right)
    // 8 possible positions for knight
    const deltas = [
      [-2, 1],
      [-2, -1],
      [-1, 2],
      [-1, -2],
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
    ];
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;
      const newPos = neighborRow + "," + neighborCol;
      const rowInbounds = neighborRow >= 0 && neighborRow < n;
      const colInbounds = neighborCol >= 0 && neighborCol < n;

      // Is inbounds and is not already visited, add to our queue
      if (rowInbounds && colInbounds && !visited.has(newPos)) {
        queue.push([neighborRow, neighborCol, moveNumber + 1]);
        visited.add(newPos);
      }
    }
  }

  return null;
};

console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
