// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// Input: A 2d array of coordinates
// Output: A 2d array of coordinates (k number of coords)

// Iterate through each point and find their value
// Return k number of points (shortest distance)

// Time complexity: O(n log n) because of sort
// Space complexity: O(n)
var kClosest = function (points, k) {
  const distances = [];
  const results = [];

  for (let coords of points) {
    let value = coords[0] ** 2 + coords[1] ** 2;
    distances.push([value, coords]);
  }

  const sortedDistances = distances.sort((a, b) => a[0] - b[0]);

  // Loop k amount of times
  for (let i = 0; i < k; i++) {
    let currCoord = sortedDistances[i][1];
    results.push(currCoord);
  }

  return results;
};

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]

let points = [
  [1, 3],
  [-2, 2],
];
let k = 1;

console.log(kClosest(points, k));
