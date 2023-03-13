// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Input: root = [1,2]
// Output: 1

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
 * @return {number}
 */

// Input: Root of the tree
// Output: Number representing the longest diameter (the longest path from one node to another)

// Strategy:
// Do a DFS for each side of the root and then add the numbers together
// Find the max depth for each side

// Time Complexity: O(n^2);
// Space Complexity: O(n);

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const findDepth = (node, count = 1) => {
    // If node is invalid return out
    if (!node) return 0;

    // Basecase is if the node is a leaf node (no remaining branches)
    if (!node.left && !node.right) return count;

    const leftMax = findDepth(node.left, count + 1);
    const rightMax = findDepth(node.right, count + 1);

    return leftMax > rightMax ? leftMax : rightMax;
  };

  // For each node, we have to findDepth for its left and right
  const stack = [root];
  while (stack.length) {
    let currentNode = stack.pop();

    // Add left and right nodes to stack to check
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    let diameter = findDepth(currentNode.left) + findDepth(currentNode.right);
    if (diameter > maxDiameter) {
      maxDiameter = diameter;
    }
  }

  return maxDiameter;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);

// console.log(node1);

console.log(diameterOfBinaryTree(node1));
