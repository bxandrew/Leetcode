// Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

// The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

// Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.

// Strategy:
// Same algorithm as topological sort of a graph
// Use a counting object to track number of parents and when it is ready (0 parents left)
// First build the graph from the hints edge list
// Iterate through the graph and then initialize our count object with 0's (count represents number of parents not visited)
// Iterate through the count object and see if there are any keys with values of 0 (ready to be added to our final output)
// Start our iteratation with our top level node and then slowly reduce the parent count and also add to our values output

const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  const count = {};

  for (let node in graph) {
    count[node] = 0;
  }

  for (let node in graph) {
    for (let neighbor of graph[node]) {
      count[neighbor]++;
    }
  }

  const ready = [];
  for (let node in count) {
    if (count[node] === 0) ready.push(node);
  }

  const values = [];
  while (ready.length > 0) {
    const current = ready.pop();
    values.push(current);
    for (let neighbor of graph[current]) {
      count[neighbor]--;
      if (count[neighbor] === 0) ready.push(String(neighbor));
    }
  }

  return values.join("");
};

const buildGraph = (pairs) => {
  const graph = {};

  for (let pair of pairs) {
    const [a, b] = pair;
    if (graph[a] === undefined) graph[a] = [];
    if (graph[b] === undefined) graph[b] = [];
    graph[a].push(b);
  }

  return graph;
};

console.log(
  safeCracking([
    [7, 1],
    [1, 8],
    [7, 8],
  ])
); // -> '718'

console.log(
  safeCracking([
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1],
  ])
); // -> '473591'
