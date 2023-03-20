// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

// Input: A graph in the form of an adjacency list
// Output: Boolean represented if there exists a cycle in the graph

// Strategy:
// A cycle can be identified if we are able to visit a past visited node
// We will need to be able to iterate through every single node in the case of disconnected components
// For each node, simply do a dfs, if ever visiting a previously visited node, return out true
// Visited set should not be a global object, Establish a new one for each dfs traversal

// const hasCycle = (graph) => {
//   for (let node in graph) {
//     const result = traverseCheck(graph, node, new Set());
//     if (result === true) {
//       return true;
//     }
//   }

//   return false;
// };

// // The purpose of traverse is to do a dfs traversal and see if there is a cycle (if we can hit a previous visited node);
// const traverseCheck = (graph, node, visited) => {
//   if (visited.has(node)) return true;
//   visited.add(node);

//   for (let neighbor of graph[node]) {
//     const result = traverseCheck(graph, neighbor, visited);
//     if (result === true) {
//       return true;
//     }
//   }

//   visited.delete(node);

//   return false;
// };

// White/Grey/Black Algorithm (Not visited, Visiting, Visited)

const hasCycle = (graph) => {
  const visited = new Set(); // Black

  for (let node in graph) {
    const result = traverse(graph, node, new Set(), visited);
    if (result === true) return true;
  }

  return false;
};

// Visiting is our grey set
const traverse = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false; // If we have visited this node before and it's black, return false (already visited and confirmed)
  if (visiting.has(node)) return true; // If we are visiting and encounter this, its a cycle, return true

  visiting.add(node);
  // Iterate through neighbors
  for (let neighbor of graph[node]) {
    const result = traverse(graph, neighbor, visiting, visited);
    if (result === true) return true;
  }

  visited.add(node);
  return false;
  // If we never encounter a cycle in our dfs traversal, mark the node as visited and return out false
};

console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  })
); // -> true

console.log(
  hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
  })
); // -> false)

console.log(
  hasCycle({
    a: ["b", "c"],
    b: [],
    c: [],
    e: ["f"],
    f: ["e"],
  })
); // -> true)
