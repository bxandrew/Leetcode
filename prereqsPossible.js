// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

// Input: num of courses (representing nodes) and a 2d array prereqs representing an edge list
// Output: If it is possible to visit all nodes (boolean)

// Strategy:
// We can use the White/Grey/Black algorithm to check if there is a cycle ( if there is a cycle you cannot complete the course) return false
// Build a graph from our numCourses and prereqs edge list
// Iterate through each node
// Do a dfs traversal for that node and mark visited
// If there are no cycles, then we can say that all prereqs are possible, return true

const prereqsPossible = (numCourses, prereqs) => {
  const visited = new Set();
  const visiting = new Set();
  const graph = buildGraph(numCourses, prereqs);

  // Iterate through our graph
  for (let node in graph) {
    if (traverse(graph, node, visiting, visited) === false) {
      return false;
    }
  }

  return true;
};

// Purpose of traverse is to do a dfs traversal through our graph and check for cycles while also marking visited
const traverse = (graph, current, visiting, visited) => {
  if (visiting.has(current)) return false; // If there is a cycle in our current visiting path, return false, we cannot complete the prereqs
  if (visited.has(current)) return true; // If we have already vetted the node (visited) then we can say true its completable.

  visiting.add(current);

  for (let neighbor of graph[current]) {
    if (traverse(graph, neighbor, visiting, visited) === false) {
      return false;
    }
  }

  visiting.delete(current);
  visited.add(current);
  return true;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};

// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> false
