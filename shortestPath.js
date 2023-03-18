// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

// Input: An array of edges, a start node and an end node
// Output: The shortest path between start and end

// Strategy:
// First convert the array of edges into an adjacency list.
// Then traverse from start to end and count the number of steps it took.
// As we traverse we will need to keep the count of how many steps it took to traverse to the spot
// If we cant get to nodeB after doing a full traversal return -1
// ** Can probably assume that there will be multiple paths to the end node
// ** Will need to make use of a visited set to prevent cycles or infinite loops
//    For this visited set, we will only need it for the current traversal so remove visited nodes as we back track

// Time Complexity: O(n) becuase we travel through all the edges
// Time Complexity: O(n) because we store visited nodes for each dfs traversal.

// const shortestPath = (edges, nodeA, nodeB) => {
//   const graph = {};
//   const visited = new Set();

//   // Make our graph here as an adjacency list
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (graph[a] === undefined) graph[a] = [];
//     if (graph[b] === undefined) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   // Now we want to do a dfs from nodeA to nodeB, but have it give us the shortest path
//   const shortest = traverse(graph, visited, nodeA, nodeB);

//   // If we have never found a path to nodeB (shortest would be infinity). Return -1
//   return shortest === Infinity ? -1 : shortest;
// };

// // Returns the paths
// const traverse = (graph, visited, current, end, path = 0) => {
//   if (visited.has(current)) return;
//   if (current === end) return path;

//   let shortest = Infinity;

//   visited.add(current);

//   for (let neighbor of graph[current]) {
//     const distance = traverse(graph, visited, neighbor, end, path + 1);
//     if (distance < shortest) shortest = distance;
//   }

//   // Delete our currently visited path as we finish iterating through the route

//   visited.delete(current);
//   return shortest;
// };

// Strategy:
// Still need to initialize our edges array into an adjacency list that will represent the graph
// We also need to check our visited to prevent cycles
// Using BFS instead of a DFS traversal, the first time we hit the target node will mean that that is the shortest path.
// Implement a BFS traversal using a queue

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    if (current === nodeB) return distance; // If we have reached our destination, simply return the distance to this node
    if (visited.has(current)) continue; // If we have visited the node before simply continue (we have already checked this node)

    visited.add(current); // Mark our current node visited

    for (let neighbor of graph[current]) {
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (graph[a] === undefined) graph[a] = [];
    if (graph[b] === undefined) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2
