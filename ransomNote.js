// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Input: Two strings
// Output: Boolean

// Strategy: (Objective: Make ransomNote from magazine string, can only use each letter once)
// Iterate through ransomNote and count each letter occurance
// Do same with magazine
// Check ransomNote letters against magazine and see if the letters are less than or equal to magazine
//  If not, return false

// Time complexity is O(n) because we have to make a full iteration for each input string and then finally check the letter counts against each other.
// Space complexity is O(n) because we have to create an object for each input string.

// Time complexity: O(n)
// Space Complexity: O(n)
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteLetters = {};
  const magazineLetters = {};

  // Iterate through our ransomNote and count letters
  for (let letter of ransomNote) {
    ransomNoteLetters[letter] = ransomNoteLetters[letter] + 1 || 1;
  }

  // Iterate through our magazine and count letters
  for (let letter of magazine) {
    magazineLetters[letter] = magazineLetters[letter] + 1 || 1;
  }

  // Check ransomNoteLetters against magazineLetters and see if the value is less than or equal to.
  for (let key in ransomNoteLetters) {
    // If not less than or equal to, return false
    if (!(ransomNoteLetters[key] <= magazineLetters[key])) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aaa", "baaabb"));
