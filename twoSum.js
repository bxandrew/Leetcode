// Prompt:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Time Complexity: O(n) Linear

//Strategy to get Time Complexity of O(n)?
//Store the values into an object or map (new ES6 structure with keys being anything (not just strings))
// Iterate through the nums and check if the remaining value after subtracting off target is inside of our object
// If it is then return the index values
// If not? Assign the keyvalue pair into our object and continue iterating.

var twoSum = function(nums, target) {
  //input is an array of numbers
  //output is an array of index numbers that add to target
  let numStore = {}; //store key as the number, value is index
  //iterate through the nums and use an object to store data
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    //if the key of the target-currNum exists, return its value and our currentIndex
    // we use !== undefined here because the value of 0 is a falsey value.
    if (numStore[target - currNum] !== undefined) {
      return [numStore[target-currNum], i];
    }
    numStore[currNum] = i;
  }

  return [];
};