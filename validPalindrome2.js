// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */

// Input: A string
// Output: A boolean representing if the string is a valid palindrome

// Strategy:
// Use two pointers one for front one for back
// Check chars to each other and confirm if they are equal
// If the left and right pointers pass each other return true, is valid palindrome
// If the left or right are not equal then return false.

var isPalindrome = function (s) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const checkChars = s
    .split("")
    .filter((char) => validChars.includes(char.toLowerCase()))
    .join("")
    .toLowerCase();
  console.log(checkChars);

  let left = 0;
  let right = checkChars.length - 1;

  while (left < right) {
    if (checkChars[left] !== checkChars[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("aaAAAA"));
