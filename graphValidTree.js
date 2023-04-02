// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

// Example1:
// Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {boolean}
//  */

// Input: Number representing number of nodes, and an edgelist
// Output: Boolean representing if it is a valid tree

// Strategy:
// Use white grey black algorithm (Not visited, visiting, visited)
// Check for cycles and if we can visit every node starting from the root
// Change the number + edgelist into an adjacency list (undirected)

var validTree = function (n, edges) {
  if (edges.length === 0 && n === 1) return true;
  if (edges.length === 0 && n > 1) return false;
  const graph = buildGraph(n, edges);

  const visited = new Set();
  const visiting = new Set();

  const result = detectCycle(graph, edges[0][0], -1, visiting, visited);
  if (result === true) return false;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) return false;
  }

  return true;
};

const detectCycle = (graph, current, prev, visiting, visited) => {
  if (visited.has(current)) return false;
  if (visiting.has(current)) return true;
  visiting.add(current);

  for (let neighbor of graph[current]) {
    if (neighbor === prev) continue;
    const result = detectCycle(graph, neighbor, current, visiting, visited);
    if (result === true) return true;
  }

  visiting.delete(current);
  visited.add(current);

  return false;
};

const buildGraph = (n, edges) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(validTree(2, [[1, 0]])); // true

// console.log(
//   validTree(5, [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [1, 4],
//   ])
// ); // true

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// Output: false
