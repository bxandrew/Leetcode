// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

const overlapSubsequence = (str1, str2, index1 = 0, index2 = 0, memo = {}) => {
  const key = index1 + "," + index2;
  if (key in memo) return memo[key];

  if (index1 >= str1.length) return 0;
  if (index2 >= str2.length) return 0;

  if (str1[index1] === str2[index2]) {
    memo[key] =
      1 + overlapSubsequence(str1, str2, index1 + 1, index2 + 1, memo);
  } else {
    const left = overlapSubsequence(str1, str2, index1, index2 + 1, memo);
    const right = overlapSubsequence(str1, str2, index1 + 1, index2, memo);
    memo[key] = Math.max(left, right);
  }

  return memo[key];
};

console.log(overlapSubsequence("dogs", "daogt")); // -> 3
console.log(overlapSubsequence("xcyats", "criaotsi")); // -> 4
