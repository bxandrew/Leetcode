// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Input: Number of courses needed to be completed (courses are 0 - numCourses - 1) | Array of pre-reqs for the courses
//[a, b], to take course a, you must take course b first
// Output: Boolean

// Strategy:
// This is a graph type problem
// numCourses will be our nodes, with the pre-reqs our array of edges
// From every node, one should be able to reach an end (never visit back a visited node).
// We will have to generate a graph (adjacency list) with all numCourses
// Fill its neighbors array (only in one direction)
// Traverse all our nodes from 0-numCourses - 1
// For each neighbor it also must eventually end
// Try to implement with dfs

// Time Complexity: O(n + e) where n is the number of nodes we have to visit and e is the edges we traverse
// Space Complexity: O(n + e) similar to time complexity. We have to store each node and each edge
const canFinish = (numCourses, prerequisites) => {
  const graph = {};
  // Instantiate our graph (adjacency list)
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  // Fill the corresponding nodes' neighbor array
  for (let edges of prerequisites) {
    graph[edges[0]].push(edges[1]);
  }

  const visited = {};
  const dfs = (node) => {
    if (visited[node] === true) return false; // Basecase, if its a visited node, immediately return false
    if (graph[node].length === 0) return true; // If the neighbors is empty, we can complete this course, return true

    // As we visit the node, mark it true, and visit its neighbors
    visited[node] = true;

    for (let neighbor of graph[node]) {
      if (!dfs(neighbor)) return false;
    }

    // After we are done visiting, unmark the area (pick up bread crumps)
    visited[node] = false;
    graph[node] = []; // Mark this node as completed for future if we ever come back to this node we can hit base case
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    // If dfs ever returns false there is a course we cannot complete
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};

const numCourses = 7;
const prerequisites = [
  [1, 0],
  [0, 3],
  [0, 2],
  [3, 2],
  [2, 5],
  [4, 5],
  [5, 6],
  [2, 4],
];
console.log(canFinish(numCourses, prerequisites));
// Input: numCourses = 4, prerequisites = [[2,0],[1,0],[3,1],[3,2],[1,3]]
// Output: true
