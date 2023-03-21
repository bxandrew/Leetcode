// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// Input: An array of numbers and a target sum
// Output: The index of the pair of nums that equal to the targetSum

// Strategy:
// Use an object where the keys are the numbers we've iterated through and the value is the index of that number
// Iterate through our numbers array and check to see if the corresponding pair is in our object, if not put our number in our object
// Continue iterating until we find the correct pair

const pairSum = (numbers, targetSum) => {
  const cache = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];
    if (complement in cache) {
      return [cache[complement], i];
    }

    cache[numbers[i]] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
