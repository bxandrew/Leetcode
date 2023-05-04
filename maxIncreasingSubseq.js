// Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.

// A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

// Strategy:
// Will need to slowly cut down the numbers array and we have the choices between taking or not taking at each step (with a condition that it has to be greater then the previous number)
// Save value of previous number so that we can compare current number and see if we can take it
// Also see if we dont take it and continue iterating through the numbers array
// Basecase is when we are done iterating through our numbers array
// Memoize to prevent duplicate recalculations

const maxIncreasingSubseq = (numbers, current = 0, memo = {}) => {
  if (current in memo) return memo[current];

  if (numbers.length === 0) return 0;

  let take = 0;
  if (numbers[0] > current) {
    take = 1 + maxIncreasingSubseq(numbers.slice(1), numbers[0], memo);
  }

  const dontTake = maxIncreasingSubseq(numbers.slice(1), current, memo);
  memo[current] = Math.max(take, dontTake);
  return memo[current];
};

// const numbers = [4, 18, 20, 10, 12, 15, 19];
// console.log(maxIncreasingSubseq(numbers)); // -> 5

// const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
// console.log(maxIncreasingSubseq(numbers)); // -> 4
