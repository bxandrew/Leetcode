// A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in exactly m moves? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightlyNumber, that takes in 6 arguments:

// n, m, kr, kc, pr, pc

// n = the length of the chess board
// m = the number of moves that must be used
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the target row
// pc = the target column
// The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.

// Strategy:
// Similar to a graph traversal problem, we are going to traverse each position with its deltas (possible move set)
// If the move available is 0 and the current position is equal to it's target position, return 1 (possible solution)
// If the move is 0 and the current position is not equal to the target (invalid position) return 1
// Go through all possible moves for each position with regards to how many moves are left
// Memoize the current moves left with its current position to prevent repeat calculations

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const pos = m + "," + kr + "," + kc;
  if (pos in memo) return memo[pos];

  if (m === 0 && kr === pr && kc === pc) return 1;
  if (m === 0) return 0;
  if (kr >= n || kc >= n || kr < 0 || kc < 0) return 0; // Checking for out of bounds

  let count = 0;

  const deltas = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  for (let delta of deltas) {
    const [rowDelta, colDelta] = delta;
    const newRow = kr + rowDelta;
    const newCol = kc + colDelta;
    count += knightlyNumber(n, m - 1, newRow, newCol, pr, pc, memo);
  }

  memo[pos] = count;
  return count;
};

console.log(knightlyNumber(8, 2, 4, 4, 5, 5)); // -> 2
console.log(knightlyNumber(8, 3, 5, 2, 4, 4)); // -> 21)
