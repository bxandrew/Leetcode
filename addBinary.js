// Given two binary strings a and b, return their sum as a binary string

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Input: Two strings (a, b)
// Output: String representing their sum

// Strategy:
// Use two arrays (a and b)
// Use a carry array
// Use these three to calculate the answer

var addBinary = function (a, b) {
  const aBit = a.split("").reverse();
  const bBit = b.split("").reverse();
  const longerLength = aBit.length > bBit.length ? aBit.length : bBit.length;
  const carry = new Array(longerLength).fill(0); // Start out with filled 0's

  for (let i = 0; i < longerLength; i++) {
    // The first condition is if it is 1, which means the carry is 1, 0
    carry[i] = carry[i] + Number(aBit[i] || 0) + Number(bBit[i] || 0);

    // If the math from all 3 arrays is 2, the carry is 0, 1 (carry over the 1) (that's why it's called carry)
    if (carry[i] === 2) {
      carry[i] = 0;
      carry[i + 1] = 1;
    } else if (carry[i] === 3) {
      // If the sum of all 3 array is 3 means its a full carry (1, 1)
      carry[i] = 1;
      carry[i + 1] = 1;
    }
  }

  if (carry[carry.length - 1] === 2) {
    carry[carry.length - 1] = 0;
    carry[carry.length] = 1;
  }

  carry.reverse();
  return carry.join("");
};

let a = "1111";
let b = "10";
console.log(addBinary(a, b)); // '10001'
