// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Tree looks like:
//          4
//      2       7
//    1   3


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
 * @param {number} val
 * @return {TreeNode}
 */

// We want to return the node of the tree that is equal to the value
// Given a root node, iterate through the binary search tree

// Strategy:
// We have a value, BST is already ordered left, right (assuming it's a valid tree);
// Evaluate if our value is our current node's value
// If it is not, find out if it is LESS than or GREATER than the node's value
//    If LESS than, go down the left tree
//    If GREATER than, go down the right tree
// If there are no more trees to go down, return null (not found)

var searchBST = function(root, val) {
  // Determine if the current node's value is our val
  if (val === root.val) {
    return root;
  }

  // If greater than our node's value, go to the right side //
  // Also remember to check if we even have a right side //
  if (val > root.val && root.right) {
    return searchBST(root.right, val);
  }

  // If less than our node's value, go to the left side //
  if (val < root.val && root.left) {
    return searchBST(root.left, val);
  }

  return null;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node7 = new TreeNode(7);
const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node1, node3);
const node4 = new TreeNode(4, node2, node7);

// console.log(node4);

console.log(searchBST(node4, 2)); // should return node2