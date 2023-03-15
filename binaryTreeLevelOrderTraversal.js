// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Input: root = [1]
// Output: [[1]]

// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Input: Root node
// Output: 2d array of each levels elements (BFS)

// Strategy:
// Will need to put nodes in the same level in the same array (Will need to keep level depth somehow)
// Will need to do a BFS

// Generate a recursive solution with a depth counter
// Generate a results array to store elements into.
// Recursively iterate through the tree
// Depth is the array i index

// Time Complexity: O(n)
// Space Complexity: O(n)

var levelOrder = function (root) {
  const result = [];

  // Recursively traverse, give node, give depth (should have reference to result via closure)
  const bfsTraverse = (node, depth) => {
    if (!node) return; // If node is null return out

    // Initialize a new array if we have reached the depth and its not defined
    if (result[depth] === undefined) {
      result[depth] = [];
    }

    // Push our current node into the depth index of result
    result[depth].push(node);

    bfsTraverse(node.left, depth + 1);
    bfsTraverse(node.right, depth + 1);
  };

  bfsTraverse(root, 0);
  console.log(result);
};

function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let node7 = new TreeNode(7);
let node15 = new TreeNode(15);
let node20 = new TreeNode(20, node15, node7);
let node9 = new TreeNode(9);
let node3 = new TreeNode(3, node9, node20);

console.log(levelOrder(node3));
// console.log(node3);
