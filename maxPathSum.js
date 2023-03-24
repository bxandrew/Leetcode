// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Input: Root of a tree
// Output: The sum of the path that is largest

// Strategy:
// Iterate through the tree recursively
// Basecase will be when we have reached a leaf node, simply return itself as a value
// If not basecase (not leaf node), eval if left or right is smaller
// Edge case if null we return -Infinity
// Recurisvely call traverse down the tree for the left and right path
// Add Math.max of the two paths into our current value and return it.

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxLeft = maxPathSum(root.left);
  const maxRight = maxPathSum(root.right);

  return root.val + Math.max(maxLeft, maxRight);
};
