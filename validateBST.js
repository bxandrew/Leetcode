// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

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
 * @return {boolean}
 */

// Input: Root of a binary search tree
// Output: If it is a valid binary search tree

// Strategy:
// Recursively iterate through the tree to check if it is valid
// Need to make sure that it is valid within itself and the tree as a whole
// Bring down limits to the next recursive function to ensure bottom trees still meet the criteria
// Left trees have a maximum limit, right trees have a minimum limit
// Bring down previous mins and maxs and only replace the maximum if going down the left and replace the minimum if going down the right

var isValidBST = function (root, min, max) {
  if (root === null) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// Input: root = [2,1,3]
// Output: true
