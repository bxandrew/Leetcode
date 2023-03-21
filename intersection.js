// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// Input: Two arrays
// Output: An array with elements that are in both arrays

// Strategy:
// Iterate through one array and store each element (since each array is unique we can use a set)
// Iterate through the second string and check if the object contains the current element

const intersection = (a, b) => {
  const cache = new Set();

  for (let num of a) {
    cache.add(num);
  }

  const common = [];

  for (let num of b) {
    if (cache.has(num)) {
      common.push(num);
    }
  }

  return common;
};

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2,6]
