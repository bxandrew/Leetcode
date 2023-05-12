// 115. Distinct Subsequences

// Given two strings s and t, return the number of distinct
// subsequences
//  of s which equals t.

// The test cases are generated so that the answer fits on a 32-bit signed integer.

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit
// Example 2:

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// Strategy:
// Keep track of current char via pointers
// If they are equal advance both pointers forward
// Also take a recursive path where we dont take the char even if they are equal (just advance pointer1)
// Add the paths that return 1 (when pointer2 reaches target words length)
// Memoize to reduce time complexity from exponential to multilinear

var numDistinct = function (s, t, pointer1 = 0, pointer2 = 0, memo = {}) {
  const pos = pointer1 + "," + pointer2;
  if (pos in memo) return memo[pos];

  if (pointer2 === t.length) return 1;
  if (pointer1 === s.length) return 0;

  let count = 0;

  if (s[pointer1] === t[pointer2]) {
    const sameResult = numDistinct(s, t, pointer1 + 1, pointer2 + 1, memo);
    count += sameResult;
  }

  const notSameResult = numDistinct(s, t, pointer1 + 1, pointer2, memo);
  count += notSameResult;

  memo[pos] = count;
  return memo[pos];
};
