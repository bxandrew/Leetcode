// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

//have two pointers from left to right
//if left pointer goes past right pointer return true
//if they are ever not equal return false

var isPalindrome = function(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
  let string = s.toLowerCase().split('');
  let formattedString = string.filter((char) => alphabet.includes(char)).join('');
  console.log(formattedString);
  if (!formattedString.length) return true

  for (let i = 0; i < formattedString.length; i++) {
    let left = i;
    let right = formattedString.length - 1 - i;
    if (left >= right) {
      return true;
    }

    if (formattedString[left] !== formattedString[right]) {
      return false;
    }
  }
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));