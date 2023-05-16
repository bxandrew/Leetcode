// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// Strategy:
// Decision tree DP problem
// The choices at each position would be to insert, replace, or delete (all 1 decision)
// Also there is a choice of nothing (when current position is equal to each other) (0 decision)
// Inserting means advancing word2's pointer forward but keeping pointer1 the same (think adding a free letter on, but word stays same size)
// Deleting means advancing word1's pointer forward but keeping word2's pointer same (not sure if they are equal yet)
// Replace means advancing both pointers forward
// Take min of all decision tree paths
// Memoize to reduce time complexity from O(3 ^ n) (3 paths each) to O(n * m) the length of the words

var minDistance = function (word1, word2, pointer1 = 0, pointer2 = 0, memo = {}) {
  const pos = pointer1 + "," + pointer2;
  if (pos in memo) return memo[pos];

  if (pointer2 === word2.length && pointer1 === word1.length) return 0;
  if (pointer2 === word2.length) return word1.length - pointer1;
  if (pointer1 === word1.length) return word2.length - pointer2;

  if (word1[pointer1] === word2[pointer2]) {
    const result = minDistance(word1, word2, pointer1 + 1, pointer2 + 1, memo);
    memo[pos] = result;
    return memo[pos];
  }

  let min = Infinity;
  const insert = 1 + minDistance(word1, word2, pointer1, pointer2 + 1, memo);
  const del = 1 + minDistance(word1, word2, pointer1 + 1, pointer2, memo);
  const replace = 1 + minDistance(word1, word2, pointer1 + 1, pointer2 + 1, memo);
  min = Math.min(min, insert, del, replace);

  memo[pos] = min;
  return memo[pos];
};

console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5
