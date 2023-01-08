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
 var maxProfit = function(prices) {
  const profits = {};

  //for each index, instantiate the key (key should be index)
  for (let i = 0; i < prices.length; i++) {
    profits[i] = 0;

    //iterate through all other elements and determine possible profits
    for (let j = i+1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]; //later day minus current day
      if (profit > profits[i]) {
        profits[i] = profit;
      }
    }

  }
  console.log(profits);

  let max = 0;
  for (let key in profits) {
    if (profits[key] > max) {
      max = profits[key];
    }
  }

  console.log(max);
  return max;
};

// prices =
// [7,1,5,3,6,4]

maxProfit([7,1,5,3,6,4])