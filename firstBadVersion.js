
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.



// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// Strategy:
// The returned function takes an integer n that represents total number of version
// The function isBadVersion will return a boolean check for the number passed in
// isBadVersion(2) === false
// Implementing a naive approach, iterate forward from the number 1 and then check each time with the isBadVersion, if it returns true, return out
// Naive approach only works for small numbers, it'll take too long to iterate through everything

// Try an approach that divides the number in half and searches from there
// Similar to binary search


var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  let truePointer;
  let falsePointer;

  return function(n) {
    // n represents the total number of versions
    let versionCheck = n;
    while (isBadVersion(versionCheck)) {
      truePointer = versionCheck;
      versionCheck = Math.floor(versionCheck / 2);
    }

    falsePointer = versionCheck;

    // Now we have both pointers, iterate through them and return the first version that returns true
    for (let start = falsePointer; start <= truePointer; start++) {
      if (isBadVersion(start)) {
        return start;
      }
    }

  };
};