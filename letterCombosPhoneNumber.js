// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */

// Strategy:
// First build a translator dictionary for each digit (T9 build)
// At each digit, we have theyre values choices (eg digit 2 pathway is 'abc');
// Select each element as a path and then move onto the next digit
// After we have finished iterating through all digits, push the currently built substring
// To backtrack back up our dfs, we just simply remove the previous character we were working with and send it to the next call

// Time complexity: O(n * 4 ^ n) because we have to recreate the string at each interval and at most there are 4 choices at each path

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const letters = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };

  const result = [];

  let currString = "";
  const dfs = (index = 0) => {
    if (index === digits.length) {
      result.push(currString);
      return;
    }

    const currDigit = digits[index];
    for (let letter of letters[currDigit]) {
      const temp = currString;
      currString += letter;
      dfs(index + 1);
      currString = temp;
    }
  };

  dfs();
  return result;
};
