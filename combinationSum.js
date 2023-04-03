// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Input: An array representing candidates and a target num to get to using those candidates
// Output: An array of paths

// Strategy:
// Recursively iterate through all possible combinations (using only other greater numbers)
// This prevents duplicates
// Build an array as we iterate down the recursive tree, make a new array each time to avoid accidently accessing through reference
// Push the built array path in the end if a valid result (sum is equal to target)
// Else return out of recursive path

var combinationSum = function (candidates, target) {
  const result = [];

  const check = (arr = [], sum = 0, index = 0) => {
    if (sum === target) result.push(arr);
    if (sum > target) return;

    for (let i = index; i < candidates.length; i++) {
      check([...arr, candidates[i]], sum + candidates[i], i);
    }
  };
  check();
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
