// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// Input: A string
// Output: The highest count char (string)

// Strategy:
// Use the counting algorithm with an object to store char counts

// const mostFrequentChar = (s) => {
//   const count = {};
//   let mostFrequent = 0;
//   let frequentChar = "";

//   for (let char of s) {
//     if (count[char] === undefined) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }

//   for (let char in count) {
//     if (count[char] > mostFrequent) {
//       mostFrequent = count[char];
//       frequentChar = char;
//     }
//   }

//   return frequentChar;
// };

const mostFrequentChar = (s) => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char]++;
  }

  let mostFrequent;
  // Iterate through the string again to check most frequent char (checking against count object);
  for (let char of s) {
    if (mostFrequent === undefined || count[char] > count[mostFrequent]) {
      mostFrequent = char;
    }
  }

  return mostFrequent;
};

console.log(mostFrequentChar("bookeeper")); // -> 'e'
