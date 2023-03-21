// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// Input: Two strings
// Output: Boolean representing if they are anagrams

// Strategy:
// Use an object to store the number of chars in each string, compare them to each other

// const anagrams = (s1, s2) => {
//   if (s1.length !== s2.length) return false;
//   const count1 = {};
//   const count2 = {};

//   for (let i = 0; i < s1.length; i++) {
//     count1[s1[i]] = count1[s1[i]] ? count1[s1[i]] + 1 : 1;
//     count2[s2[i]] = count2[s2[i]] ? count2[s2[i]] + 1 : 1;
//   }

//   for (let count in count1) {
//     if (count1[count] !== count2[count]) {
//       return false;
//     }
//   }

//   return true;
// };

// Using only one count object
const anagrams = (s1, s2) => {
  const count = {};

  // Create our count of string1
  for (let char of s1) {
    if (count[char] === undefined) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  console.log(count);

  // Decrement the chars of string2 from string1 count. (If it doesnt exist that means they are not anagrams)
  for (let char of s2) {
    if (count[char] === undefined) return false;
    count[char] -= 1;
  }

  // Check if all the values in our count object is 0
  for (let char in count) {
    if (count[char] !== 0) return false;
  }

  return true;
};

console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
