// Repeat of maxDepth of Binary Tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

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

// Input: Root of a tree
// Output: Max depth of the tree

// Strategy: Use DFS to find the max depth
// Use a stack

// Time complexity: O(n)
// Space complexity: O(n)
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]]; // Start off with input root in stack
  let depth = -Infinity;

  while (stack.length) {
    let [currentNode, currentDepth] = stack.pop();
    if (currentDepth > depth) {
      depth = currentDepth;
    }

    if (currentNode.left) {
      stack.push([currentNode.left, currentDepth + 1]);
    }

    if (currentNode.right) {
      stack.push([currentNode.right, currentDepth + 1]);
    }
  }

  return depth;
};
