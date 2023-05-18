// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Strategy:
// Use back tracking algorithm
// As we recurse down decision tree using dfs traversal
// There are 2 decisions (take curr coin or not to)
// Push coin into our subset and then recurse down, after returning back up, pop it off and recurse down the path where we dont take coin
// If our target is 0, push our array to results (good subset)

var combinationSum = function (candidates, target) {
  const result = [];

  const currCandidate = [];
  const dfs = (target, index = 0) => {
    if (index === candidates.length) return;
    if (target < 0) return;
    if (target === 0) {
      result.push(currCandidate.slice());
      return;
    }

    // take coin
    const currCoin = candidates[index];
    currCandidate.push(currCoin);
    dfs(target - currCoin, index);

    currCandidate.pop();
    dfs(target, index + 1);
  };

  dfs(target);
  return result;
};
