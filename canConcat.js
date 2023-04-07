// Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

// You may reuse words of the array as many times as needed.

// canConcat("oneisnone", ["one", "none", "is"]); // -> true

const canConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return true;

  for (let word of words) {
    if (s.startsWith(word)) {
      const result = canConcat(s.slice(word.length), words, memo);
      if (result === true) {
        memo[s] = true;
        return memo[s];
      }
    }
  }

  memo[s] = false;
  return false;
};

// console.log(canConcat("santahat", ["santah", "hat"])); // -> false
