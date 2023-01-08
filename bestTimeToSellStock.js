// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

 //input is an array of prices, with index representing the day
 //output is the max profit (or difference) (return 0 if cant acheive profit)
 //goal is to get max profit from buying on a day then selling on a day

 //strategy: use an object to store max profits on any given day
 //instantiate profit of 0 inside our object
 //profit can be later index minus current index (check to only be positive)
 //need to iterate through the array at least once

 //then iterate through our array of objects and find the greatest value.

 //lets implement niave solution (n2 time complexity)
//  var maxProfit = function(prices) {
//   const profits = {};

//   //for each index, instantiate the key (key should be index)
//   for (let i = 0; i < prices.length; i++) {
//     profits[i] = 0;

//     //iterate through all other elements and determine possible profits
//     for (let j = i+1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i]; //later day minus current day
//       if (profit > profits[i]) {
//         profits[i] = profit;
//       }
//     }

//   }
//   console.log(profits);

//   let max = 0;
//   for (let key in profits) {
//     if (profits[key] > max) {
//       max = profits[key];
//     }
//   }

//   console.log(max);
//   return max;
// };

//lets implement a LINEAR solution:
//Time Complexity: O(n);

 //LINEAR strategy

 //for the current index number, find the lowest number to the left of it and make that the new max profit for current day
//keep a running count of the lowest number as we iterate
//after finish iterating return our profit variable

var maxProfit = function(prices) {
  let lowest = prices[0]; //first number is always lowest number
  let maxProfit = 0;

  //iterate through our array and keep a running count of lwoest number
  for (let i = 1; i < prices.length; i++) {
    //set lowest number according to current index
    if (prices[i] < lowest) {
      lowest = prices[i];
    }

    //if our current number minus the lowest number is higher than max profit set it
    if ( (prices[i] - lowest) > maxProfit ) {
      maxProfit = prices[i] - lowest;
    }
  }

  return maxProfit;
};

// prices =
// [7,1,5,3,6,4]

maxProfit([7,1,5,3,6,4])