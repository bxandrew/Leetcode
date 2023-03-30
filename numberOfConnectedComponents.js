// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Example 1:
// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2

// Example 2:
// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

// Input: Number and an edge list
// Output: Number of components that exist in the graph

// Strategy:
// Convert the number and edges to a graph by transforming into an adjacency list
// Undirected graph so we need to push edges to both nodes
// Iterate through every node of the graph and do a traversal (dfs for this approach)
// After each traversal increment our count as one traversal is a full traversal of the current node

var countComponents = function (n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  let componentCount = 0;
  for (let node in graph) {
    const result = traverse(graph, node, visited);
    if (result === true) componentCount += 1;
  }

  return componentCount;
};

const traverse = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (let neighbor of graph[current]) {
    traverse(graph, neighbor, visited);
  }

  return true;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
