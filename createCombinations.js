// Write a function, createCombinations, that takes in an array and a length as arguments. The function should return a 2D array representing all of the combinations of the specifized length.

// The items within the combinations and the combinations themselves may be returned in any order.

// You may assume that the input array contains unique elements and 1 <= k <= items.length.

// Strategy:
// Breakdown the problems into two decision tree routes
// We need to find smaller subsets that we can put our first element into (k-1)
// Also need to find subsets without our first element
// Do this by recursively calling the function with a smaller target (k) and using the rest of the items array
//  After the subsets are returned, add our first element onto each combination return and that will be our subsets with our first element
// The other recursive call will find the subsets that are of k length without our current first element

const createCombinations = (items, k) => {
  if (items.length < k) return [];
  if (k === 0) return [[]];

  const first = items[0];
  const combosForFirst = createCombinations(items.slice(1), k - 1);
  const combosWithFirst = combosForFirst.map((sub) => [first, ...sub]);

  const combosWithoutFirst = createCombinations(items.slice(1), k);

  return [...combosWithFirst, ...combosWithoutFirst];
};

createCombinations(["a", "b", "c"], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

createCombinations(["q", "r", "s", "t"], 2); // ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]
