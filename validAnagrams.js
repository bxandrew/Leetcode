// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

// Strategy:
// Use an object as a data structure to hold counts of the two strings.
// Iterate through both strings and store their coressponding counts of chars
// Check objects against each other at the end

var isAnagram = function(s, t) {
  const cacheStr1 = {};
  const cacheStr2 = {};

  //Using a for of loop here instead of classic for loop
  for (let char of s) {
    cacheStr1[char] === undefined ? cacheStr1[char] = 1 : cacheStr1[char]++;
  }

  for (let char of t) {
    cacheStr2[char] === undefined ? cacheStr2[char] = 1 : cacheStr2[char]++;
  }

  const cacheKeys1 = Object.keys(cacheStr1);
  const cacheKeys2 = Object.keys(cacheStr2);

  if (cacheKeys1.length !== cacheKeys2.length) return false;

  for (let key in cacheStr1) {
    if (cacheStr1[key] !== cacheStr2[key]) {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));