// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

/**
// Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// Input: A node (graph node);
// Output: A copy of the node input (not the same reference point)

// Strategy:
// Trying to use BFS or DFS when traversing through the graph. Use a stack for DFS and a queue for BFS
// As we visit the node, make a copy of it and store it in the hash we will call visited
// Iterate through the neighbors and push the return result from recursively iterating through the neighbors
// Return the cloned node at the end of the recursive function.

var cloneGraph = function (node) {
  const visited = {}; // A object that represents if we have visited a node

  // Do a DFS to traverse the graph and its goal is to make cloned nodes
  // Function can be called clone (bc essentially that's what it is doing)
  const dfs = (node) => {
    if (!node) return null; // Edgecase, if the node is null, return null

    // If the node exists, it is already cloned, return the cloned node
    if (visited[node.val]) {
      return visited[node.val];
    }

    // If it does not exist, clone the node
    const clone = new Node(node.val);
    visited[node.val] = clone;

    // Iterate through the current node's neighbors
    node.neighbors.forEach((neighbor) => {
      // Push the cloned neighbors into our current clone's neighbors array
      clone.neighbors.push(dfs(neighbor));
    });

    // Return the cloned node at the end
    return clone;
  };

  return dfs(node);
};

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

// console.log(node1);
console.log(cloneGraph(node1));
