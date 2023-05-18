// 47. Permutations II
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Strategy:
// Since nums are not unique, we must do a decision tree but only for unique paths to prevent duplicates
// First we will convert our array of nums to an count object of how many of each nums there are
// Then we will do a recursive decision tree via just the unique keys of the count object (no duplicate keys)
// If count is over 0, we can recurse down that path
// If it is 0, we cannot go down the path
// Using the back tracking algorithm, simply add our current iteration element onto our permutation and then remove it after we have returned back up

// Time complexity: O(n)

var permuteUnique = function (nums) {
  const count = {};
  for (let num of nums) {
    if (count[num] === undefined) count[num] = 0;
    count[num] += 1;
  }

  const result = [];
  const currPerm = [];

  const dfs = () => {
    if (currPerm.length === nums.length) {
      result.push(currPerm.slice());
      return;
    }

    for (let num in count) {
      if (count[num] > 0) {
        currPerm.push(num);
        count[num]--;

        dfs();

        currPerm.pop();
        count[num]++;
      }
    }
  };
  dfs();
  return result;
};
