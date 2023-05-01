// rite a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once.

// Cities will be numbered 0 to n - 1.

// You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

// For example, given these roads:

// 0 --- 1
// | \
// |  \
// |   \
// 2    3

// There is a unique route for between every pair of cities.
// So the answer is true.

// For example, given these roads:

// 0 --- 1
// | \
// |  \
// |   \
// 2 -- 3

// There are two routes that can be used to travel from city 1 to city 2:
// - first route:  1, 0, 2
// - second route: 1, 0, 3, 2
// The answer is false, because routes should be unique.

// Strategy:
// First build a graph from the edge list of roads and n which represents each city.
// Then do a DFS traversal starting from the first node (should be able to travel to each city at the end of one DFS traversal)
//  Eval if we have traveled to each city by evaling if visited's size (set size) is equal to n (number of cities)
// Use a helper function to DFS traverse (using a visited set to track visited nodes)
// Prevent directly backtracking by referencing the prevNode in our DFS traversal and prevent direct backtrack
// After the DFS traversal check the size of the set and if it had a cycle

const rareRouting = (n, roads) => {
  const graph = buildGraph(n, roads);
  const visited = new Set();

  const hasCycle = detectCycle(graph, "0", visited, null);
  return !hasCycle && visited.size === n;
};

const detectCycle = (graph, currNode, visited, prevNode) => {
  if (visited.has(currNode)) return true; // If hitting a visited node, there is a cycle
  visited.add(currNode);

  for (let neighbor of graph[currNode]) {
    if (neighbor !== prevNode) {
      const result = detectCycle(graph, neighbor, visited, currNode);
      if (result === true) return true;
    }
  }

  return false;
};

const buildGraph = (n, pairs) => {
  const graph = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let pair of pairs) {
    const [a, b] = pair;
    graph[a].push(String(b));
    graph[b].push(String(a));
  }

  return graph;
};

console.log(
  rareRouting(4, [
    [0, 1],
    [0, 2],
    [0, 3],
  ])
); // -> true

console.log(
  rareRouting(4, [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 2],
  ])
); // -> false
