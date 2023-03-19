// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

// Input: A graph represented as an adjacency list
// Output: The longest path in the graph

// Strategy:
// Will need to iterate through every single node as a starting point
// Will need to do a traversal for every single node to the end
// Keep a visited that will track only for the CURRENT traversal. (Graph is acyclic so no need for visited)
// Keep a longestPath variable

// Time Complexity: We have to traverse through each node and for each node we have to traverse its neighbors O(n * e) n representing nodes and e edges
// Space Complexity: O(n) because of recursively iterating through each node

const longestPath = (graph) => {
  let longest = 0;

  for (let node in graph) {
    const result = traverse(graph, node, 0);
    if (result > longest) {
      longest = result;
    }
  }

  return longest;
};

// Returns max distance of current node
const traverse = (graph, current, distance) => {
  let longest = distance; // Starts at our distance input

  for (let neighbor of graph[current]) {
    const path = traverse(graph, neighbor, distance + 1);
    if (path > longest) {
      longest = path;
    }
  }

  return longest;
};

// const graph = {
//   a: ["c", "b"],
//   b: ["c"],
//   c: [],
// };

// console.log(longestPath(graph)); // -> 2

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
  q: ["r"],
  r: ["s", "u", "t"],
  s: ["t"],
  t: ["u"],
  u: [],
};

console.log(longestPath(graph)); // -> 4
