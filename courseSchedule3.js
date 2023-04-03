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

// Input: Number representing courses, A 2d array representing an edgelist
// Output: A boolean representing if you can finish all courses (no cycles)

// Strategy:
// Build an adjacency list from the edgelist
// Iterate through each position and traverse through it marking a visited set
// Use white gray black algorithm to build sets.

var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  const visited = new Set();
  const visiting = new Set();

  for (let node in graph) {
    const result = detectCycle(graph, node, visited, visiting);
    if (result === true) return false;
  }

  return true;
};

// Purpose of detectCycle is to detect cycle (if there is a cycle, we cannot finish the course)
const detectCycle = (graph, current, visited, visiting) => {
  if (visiting.has(current)) return true; // There exists a cycle in the graph
  if (visited.has(current)) return false; // This node is already calculated to not contain a cycle
  visiting.add(current);

  for (let neighbor of graph[current]) {
    const result = detectCycle(graph, neighbor, visited, visiting);
    if (result === true) {
      return true;
    }
  }

  visiting.delete(current);
  visited.add(current);
  return false;
};

const buildGraph = (numCourses, prerequisites) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prerequisites) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};

// Input: numCourses = 2, prerequisites = [[1,0]]
console.log(canFinish(2, [[1, 0]]));
