// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// Input: An array of nums to be sorted
// Output: The same array but with 5's at the end of the array

// Strategy:
// Mutate array in place
// Use two pointers one for the front of the array and one for the back
// First goal of the loop is to place j at a point where it is not pointing at a 5
// Iterate forward through the array with the front pointer, if we reach a '5', swap it with the back pointer and move the back pointer to the next non '5' position
// Exit condition is when the front pointer meets or crosses back pointer

const fiveSort = (nums) => {
  let front = 0;
  let back = nums.length - 1;

  while (front <= back) {
    if (nums[back] === 5) {
      back--;
    } else if (nums[front] === 5) {
      [nums[front], nums[back]] = [nums[back], nums[front]];
      front++;
    } else {
      // Else the front pointer is not at a 5, simply iterate the front pointer forward
      front++;
    }
  }

  return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5]
