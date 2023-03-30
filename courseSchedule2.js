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

// Input: Number and an edgelist representing prereqs
// Output: Boolean (if completable)

// Strategy:
// Problem is phrased as a cycle detection in a graph problem
// If there is a cycle, we can never complete the pre reqs (return false)
//    Else we can complete (return true)

// Generate a graph from the number and the pre-req edge list (convert to adjacency list)
// Iterate through the nodes of the graph and check for cycles using (white gray black strategy)
// (white = not visited, gray = in progress (visiting), black = visited)

var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    const result = detectCycle(graph, node, visiting, visited);
    if (result === true) return false;
  }

  return true;
};

const detectCycle = (graph, current, visiting, visited) => {
  if (visited.has(current)) return false;
  if (visiting.has(current)) return true;
  visiting.add(current);

  for (let neighbor of graph[current]) {
    const result = detectCycle(graph, neighbor, visiting, visited);
    if (result === true) return true;
  }

  visiting.delete(current);
  visited.add(current);

  return false;
};

const buildGraph = (num, prereqs) => {
  const graph = {};
  for (let i = 0; i < num; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};

console.log(canFinish(2, [[1, 0]]));
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
