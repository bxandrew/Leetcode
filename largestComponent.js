// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

// Input: A graph in the form of an adjacency list
// Output: A number representing the size of the largest graph

// Strategy:
// Iterate through each node in the graph to iterate through each components.
// Do a dfs traversal and during the traversal increment a counter, if not visited (each visited node will increase this count)
// Return this count at the end of the traversal and store it.
// Return the largest count at the very end

// Time Complexity: O(n)
// Space Complexity: O(n)

// const largestComponent = (graph) => {
//   const visited = new Set();
//   const counts = [];

//   for (let node in graph) {
//     // Goal is to return how big this node is
//     counts.push(traverse(graph, node, visited));
//   }

//   // Edge case is for if the graph itself is empty
//   if (!counts.length) return 0;

//   return Math.max(...counts);
// };

// const traverse = (graph, current, visited, count = 0) => {
//   // If we have already visited the node, return our count (do not increment as this is already visited)
//   if (visited.has(String(current))) return count;

//   // Add to our visited set and also increment our count of how big the component is
//   visited.add(String(current));
//   count += 1;

//   // Do the dfs traversal
//   for (let neighbor of graph[current]) {
//     count = traverse(graph, neighbor, visited, count);
//   }

//   // After finish iterating through the component, return how big it is (represented by count)
//   return count;
// };

const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;

  for (let node in graph) {
    let size = traverse(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }

  return largest;
};

const traverse = (graph, current, visited) => {
  if (visited.has(String(current))) return 0;
  let count = 0;

  visited.add(String(current));
  count += 1;

  for (let neighbor of graph[current]) {
    count += traverse(graph, neighbor, visited);
  }

  return count;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4
