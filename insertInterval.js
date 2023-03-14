// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// Input: 2 arrays, the first being a 2d array of intervals and the 2nd is the newInterval to insert into the intervals 2d array
// Output: The altered intervals array (2d array)

// Strategy:
// Check if they are overlapping
// Overlapping is determined by the ranges of the two intervals
// The larger of the two start ranges is where the overlap starts
// The smaller of the two end ranges is where the overlap ends
// If the range is greater than 0, there is an overlap
// Range of the overlap is smaller of the two ends -> bigger of the two starts (Math.min(b1, b2) - Math.max(a1, a2)) >= 0

// Time complexity: O(n)
// Space complexity: O(n) (Can be improved by using original intervals array)
var insert = function (intervals, newInterval) {
  const result = [];

  let inserted = false;
  // First iterate over the intervals array and find the correct positino to insert newInterval
  for (let i = 0; i < intervals.length; i++) {
    // Find the interval array with a starting point greater than newInterval's starting point
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval); // Insert at that index
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    intervals.push(newInterval);
  }

  // Iterate through our intervals again, but now check if there are any overlaps
  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    // Check our current interval against the result array's last interval (if there is overlap)
    let previous = result[result.length - 1];
    // Math.min (smaller of end ranges) - Math.max (bigger of the start ranges) >= 0
    if (
      previous &&
      Math.min(current[1], previous[1]) - Math.max(current[0], previous[0]) >= 0
    ) {
      // There is an overlap, merge them together, before throwing them in the answers array
      const overlap = [
        Math.min(current[0], previous[0]),
        Math.max(current[1], previous[1]),
      ];
      result[result.length - 1] = overlap;
    } else {
      result.push(current);
    }
  }

  return result;
};

const intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval = [4, 8];
console.log(insert(intervals, newInterval)); // [[1,2],[3,10],[12,16]]
