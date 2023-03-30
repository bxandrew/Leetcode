// Attempt 2 for cloneGraph

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 * @param {Node} node
 * @return {Node}
 */

// Input a node in a graph
// Traverse through that node and all it's neighbors using a dfs approach
// During the recursive approach evaluate if we have visited this node previously, if we have, we already cloned the node
// Our recursive approach's purpose is to traverse the graph and clone nodes
// For each node, check if it was visited, if it has not, initialize a clone and iterate through the neighbors and clone them as well
// Push the clones to the cloned neighbors array

var cloneGraph = function (node) {
  const visited = {};

  const traverse = (current) => {
    if (current === null) return null;
    if (current.val in visited) return visited[current.val];

    const clone = new Node(current.val);
    visited[current.val] = clone;

    for (let neighbor of current.neighbors) {
      clone.neighbors.push(traverse(neighbor));
    }

    return clone;
  };

  return traverse(node);
};
