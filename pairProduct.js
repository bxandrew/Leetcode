// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

// Input: An array of nums and a targetProduct
// Output: Index of the two nums that multiply to be our targetProduct

// Strategy:
// Employ the twoSum strategy but with products instead.
// Store previous numbers in an object and check their complement

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }

    previousNums[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
