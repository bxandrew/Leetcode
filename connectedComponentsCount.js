// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

// Input: a graph
// Output: number of components inside the graph

// Strategy:
// Iterate through each node of the graph
//  Traverse with dfs
//  As we traverse the node, mark it as visited in a visited set
//  After each dfs full traversal, increment a counter

// Time Complexity: Traveling every edge of the graph at least once so O(n + e) where n is nodes and e is edges
// Space Complexity: Storing visited for each node is also O(n) where n is the nodes

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  const dfs = (node) => {
    if (visited[node]) return; // If we have visited the node return out
    // If not, mark our node as visited
    visited[node] = true;

    // Iterate through all the neighbors of the node
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  };

  // Iterate through all nodes of the graph
  for (let node in graph) {
    if (visited[node]) {
      continue;
    } else {
      dfs(node);
      count++;
    }
  }

  return count;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // 2
