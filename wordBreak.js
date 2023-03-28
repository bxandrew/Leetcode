// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Input: a string and an array of words
// Output: boolean representing if we can break the full string with the words in our array

var wordBreak = function (s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return true;
  if (wordDict.includes(s)) {
    memo[s] = true;
    return memo[s];
  }

  for (let i = 0; i < s.length; i++) {
    const left = s.slice(0, i + 1);
    const right = s.slice(i + 1);
    if (wordDict.includes(left) && wordBreak(right, wordDict, memo) === true) {
      return true;
    }
  }

  memo[s] = false;
  return memo[s];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wordBreak("ccbb", ["bc", "cb"]));
// False

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
