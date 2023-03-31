// Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

// Given 12:

// summingSquares(12) -> 3

// The minimum squares required for 12 is three, by doing 4 + 4 + 4.

// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.

// Input: A number
// Output: Steps it takes to get to that number only subtracting perfect squares

// Strategy:
// Use a recursive decision tree to iterate down (Looping through the squares of 1 -> Math.sqrt(n))
// If it reaches the basecase 0 return 0 (We have reached our target)
// if (n < 0) return Infinity; // Should never hit this basecase if we use Math.sqrt in our for loop

const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;

  let shortestPath = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const currSquare = i ** 2;
    const result = summingSquares(n - currSquare, memo);
    shortestPath = Math.min(result, shortestPath);
  }

  memo[n] = 1 + shortestPath;
  return memo[n];
};

console.log(summingSquares(8)); // -> 2
