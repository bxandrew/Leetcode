// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:

// 1 <= m, n <= 100

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Strategy:
// Grid-graph traversal problem
// Neighbors will only be right and bottom
// At the position start (0, 0) by default, start traversing using dfs through neighbor positions (right and bottom)
// If out of bounds return 0 invalid path
// If eventually reaching to bottom right position return 1, valid path
// Sum the valid paths up from bottom up
// Memoize to reduce time complexity to multilinear (m * n)

var uniquePaths = function (m, n, r = 0, c = 0, memo = {}) {
  const pos = r + "," + c;
  if (pos in memo) return memo[pos];

  if (r === m || c === n) return 0; // Invalid path out of bounds

  if (r === m - 1 && c === n - 1) return 1;

  const right = uniquePaths(m, n, r, c + 1, memo);
  const bottom = uniquePaths(m, n, r + 1, c, memo);

  memo[pos] = right + bottom;
  return memo[pos];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
