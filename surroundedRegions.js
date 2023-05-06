// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// Strategy:
// Grid-graph traversal problem with a twist
// Any island that touches the outside of the board is safe from being taken over by "X"
// Iterate through all the points at edge positions all rows 0 all col 0 all row length -1 all col rowlength-1
// If any of those positions is an island, dfs traverse it and mark all land positions "E" for escaped conquest
// After marking all islands connected to any edge position, iterate through grid fully and mark any tiles not "E" into an "X"

var solve = function (board) {
  for (let row = 0; row < board.length; row++) {
    dfs(board, row, 0);
    dfs(board, row, board[0].length - 1);
  }

  for (let col = 0; col < board[0].length; col++) {
    dfs(board, 0, col);
    dfs(board, board.length - 1, col);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      if (board[i][j] === "E") {
        board[i][j] = "O";
      }
    }
  }

  return board;
};

const dfs = (grid, row, col) => {
  if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return;
  if (grid[row][col] !== "O") return;

  grid[row][col] = "E";
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
    dfs(grid, newRow, newCol);
  }
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);

// [
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "O", "X", "X"],
// ];

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
