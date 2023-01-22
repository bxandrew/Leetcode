// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Strategy:
// Use 3 pointers (min, max) and (mid)
// Min is left index, max is right index
// Mid is calculated based off min and max index
// These pointers represent index position of the array of nums (sorted array)

// Check if the middle is the target (if so return the index of mid)

// If not, eval if the target is greater than or less than the current mid index value
// If it is greater than (it lies in the right half of the array)
//    Move the min pointer to the mid+1 point

// If it is less than (it lies in the left half of the array)
//    Move the max pointer to the mid-1 point (bc we already checked mid)

// Recurse until the target is found (by checking mid against target)
// If target is not found and the min is greater than max (we have reached end)
// Return -1

// Recursive Approach //
// Time Complexity O(log(n)) -- Splits in half each time
// Space Complexity O(log(n)) -- Have to make same number of variables as the times we split in half

// var search = function(nums, target, min = 0, max = nums.length-1) {
//   //calculate mid index based off min and max
//   let mid = Math.ceil((min + max) / 2) //round upwards

//   if (nums[mid] === target) return mid; //check if mid is target (basecase)

//   if (min > max) return -1 //if min > max, we have finished searching through the array

//   if (target > nums[mid]) {   // If target is greater than mid, it lies in right side of array
//     min = mid+1;
//     return search(nums, target, min, max);
//   } else if (target < nums[mid]) { // If target is less than mid, it lies in the left side of array
//     max = mid-1;
//     return search(nums, target, min, max);
//   }
// };

//----- Iterative Approach ----//
// Time Complexity O(log(n)) -- Still splits the array in half each time using the min and max pointers
// Space Complexity O(1) -- Only uses 3 variables to hold information, the min, max and mid pointers (if we dont count nums and target)

const search = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;

  //loop until min > max
  while (!(min > max)) {
    // we want to redeclare mid every while loop so it gets a new mid value
    let mid = Math.ceil( (min + max) / 2 );

    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      min = mid + 1;
    } else if (target < nums[mid]) {
      max = mid - 1;
    }

  }

  return -1;
}

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// console.log(search([-1,0,3,5,9,12,15,16], 16)); //5