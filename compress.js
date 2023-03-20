// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

// Input: A string that needs to be compressed
// Output: A compressed string

// Strategy:
// Similar to uncompress, use a two pointer strategy.
// This as we move the end pointer, if it changes character, take the distance between start and end and that is our compressed number
// String will be the start pointers element

const compress = (s) => {
  const result = [];
  let start = 0;
  let end = 0;

  while (end <= s.length) {
    if (s[end] === s[start]) {
      end += 1; // Move to the next position
    } else {
      // Else we are at a different char
      const difference = end - start;
      if (end - start !== 1) {
        result.push(difference); // Push the difference between end and start
      }
      result.push(s[start]); // Push our char afterwards
      start = end;
    }
  }

  return result.join("");
};

console.log(compress("ccaaatsss")); // -> '2c3at3s'
