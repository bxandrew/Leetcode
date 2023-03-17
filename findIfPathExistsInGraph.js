// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// Input: Number of nodes, a 2d array of edges, a source node and a destination node
// Output: A boolean indicating whether you can reach the destination or not

// Strategy:
// Create an adjacency list based off of the edges (this will represent our graph), and we will use this to traverse the graph
// Keep a visited object to keep track of visited nodes incase of a cyclic path.
// Attempt using a dfs traversal using a stack iteratively

var validPath = function (n, edges, source, destination) {
  const graph = {}; // Our graph in the form of an adjacency list
  // First initialize our graph via the number of nodes present (n-1)

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  // This for loop fills our nodes neighbors array (fill both nodes because this is an undirected graph)
  for (let edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  // Now do a dfs traversal starting from our source node (use a visited cache object) to prevent cyclic tracking
  const visited = {};
  const stack = [source]; // Using a stack to travel via dfs, starting with source

  while (stack.length > 0) {
    let currNode = stack.pop();
    // Check if it is the destination, return true, we can reach this destination
    if (currNode === destination) {
      return true;
    }
    // Check visited, if true, we are traveling cyclicly, continue out
    if (visited[currNode]) {
      continue;
    } else {
      visited[currNode] = true;
    }
    // Now traverse through its neighbors
    // Neighbors are going to be represented by our graph's value
    for (let neighbor of graph[currNode]) {
      // Push each neighbor into the stack where we are traversing
      stack.push(neighbor);
    }
  }

  // If we have never reached our destination, return false
  return false;
};
