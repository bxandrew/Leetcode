// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// Input: rowIndex = 3
// Output: [1,3,3,1]

// Input: rowIndex = 0
// Output: [1]

// Input: rowIndex = 1
// Output: [1,1]

/* *
 * @param {number} rowIndex
 * @return {number[]}
 */

// Strategy:
// Will need to have a column index pointer and a row index pointer
// There are two recursive basecases here
// Basecase 1: rowIndex is 1, return [1]
// Basecase 2: rowIndex is 2, return [1, 1]
// Every row also starts and ends with a 1.

// We need to access the previous rowIndex in order to find out our current positions value
// The current value will be the result of adding the previous row's column index and column-1 index together
// Column index 0 will always be 1.
// Column index last will always be 1, our last column index is (rowIndex) if (row 3, last position is index 3)

var getRow = function(rowIndex) {
  //Setup our two recursive basecases
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const row = [1];
  //We want to access the row above it and add col index - 1 and col index together to get current index value
  let prevRow = getRow(rowIndex-1); //should return [1, 2, 1];
  for (let i = 1; i < prevRow.length; i++) {
    row.push(prevRow[i] + prevRow[i-1]);
  }

  // Push the last one to sandwich it
  row.push(1);
  // console.log(row);
  return row;
};

console.log(getRow(3)); // [1, 3, 3, 1]

//---- Dynamic Programming Way ----//

// var getRow = function(rowIndex) {
//   debugger;
//   const row = [1];
//   for (let i = 0; i < rowIndex; i++) {
//     for (let j = row.length - 1; j > 0; j--) { //j represents the index of the current element in the row array
//       row[j] += row[j - 1];
//     }
//     row.push(1);
//   }
//   return row;
// };

//---- ChatGPT explanation below ----//


// Sure! The idea behind dynamic programming is to break down a problem into smaller subproblems, and then solve each subproblem only once and store the result, so that it can be reused later.

// To convert the current top-down (recursive) approach to a bottom-up (dynamic programming) approach, we can follow these steps:

// Identify the subproblems: In this case, the subproblems are the rows of the pascal triangle.

// Create a data structure to store the results of the subproblems: In this case, we can use an array to store the rows of the pascal triangle.

// Start with the base cases: In this case, the base cases are the first and second rows of the pascal triangle, which are always [1] and [1, 1] respectively.

// Iterate through the subproblems: In this case, we can use a loop to iterate through the rows of the pascal triangle.

// Use the results of the previous subproblems to solve the current subproblem: In this case, we can use the previous row to calculate the current row.

// Store the result of the current subproblem: In this case, we can store the current row in the array.

// Return the result of the final subproblem: In this case, we return the requested row of the pascal triangle.

// By following these steps, we are able to solve the problem in a more efficient way, by avoiding redundant calculations and using a more efficient use of memory.




