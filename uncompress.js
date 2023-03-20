// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>
// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// Input: a string with pairs of number characters.
// Output: the string uncompressed (spread out)

// Strategy:
// Two Pointer approach
// The first pointer will indicate the start of the number portion of the string
// The second pointer will iterate forward until it hits a character. The slice from pointer1 -> pointer2 is the full number
// After parsing the string out, move the second pointer over one and bring the first pointer with it and restart the process until pointer is out of bounds
const alphabet = new Set([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]);

// Time Complexity: O(n * m) Where n is the number of groups (number char pairs) and m is the largest number
// Time Complexity: O(n * m) The size of the output string is related to the largest number and the number of char pairs

const uncompress = (s) => {
  let result = "";

  let start = 0;
  let end = 0;
  while (end < s.length) {
    end += 1;
    if (alphabet.has(s[end])) {
      let times = Number(s.slice(start, end));
      result += s[end].repeat(times);
      end += 1;
      start = end;
    }
  }

  return result;
};

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
