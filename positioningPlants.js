// You've been hired to plant flowers in a garden with n different positions. There are m different flower types. The prices of flowers types vary depending on which position they are planted. Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. What is the minimum cost we need to plant a flower in each position of the garden?

// Write a function, positioningPlants, that takes in a 2D array with dimensions n * m. Each row of the array represents the costs of the flower types at that position. This means that costs[i][j] represents the cost of planting flower type j at position i. For example:

// Given these costs,

// costs = [
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]
// ]

// The costs of plants at position 1 are $6, $1, and $9.
// The cost of planting flower type 0 at position 1 is $6.
// The cost of planting flower type 2 at position 1 is $9.

// The function should return the minimum cost of planting flowers without placing the same flower type in adjacent positions.

// Strategy:
// We have to progressively make our input smaller so we are iterating through the rows of costs
// Basecase will be when we are finished iterating (the row is at the length of costs) return 0
// For the current row, start a decision tree at each point
// Only start the decision tree route if index is not equal to the previous index (they cannot be adjacent)
// Store resulting value in an totals array
// Finally evaluate the results that came back and select the lowest of all possibilities in the totals array

const positioningPlants = (costs, row = 0, prev = null, memo = {}) => {
  const key = row + "," + prev;
  if (key in memo) return memo[key];

  if (row === costs.length) return 0;

  const currRow = costs[row];
  const totals = [];

  for (let i = 0; i < currRow.length; i++) {
    const currValue = currRow[i];

    if (i !== prev) {
      const result = positioningPlants(costs, row + 1, i, memo);
      totals.push(currValue + result);
    }
  }

  memo[key] = Math.min(...totals);
  return memo[key];
};

console.log(
  positioningPlants([
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3],
  ])
); // -> 7, by doing 4 + 1 + 2.

positioningPlants([
  [12, 14, 5],
  [6, 3, 2],
]); // -> 8
