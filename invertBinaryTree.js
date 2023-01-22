// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

//      2      =      2
//    1  3          3   1

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
 * @return {TreeNode}
 */

// Strategy:
// Recursive approach first (recursively iterate through the tree)
// Simply swap left and right and recurse down them
// Use a swap algo similar to swapping elements in arrays
// Once we have reached a leaf (both rigth and left are null) return out

// Time Complexity: O(n) //we have to visit each node
// Space Complexity: O(n) //A new set of variables is used each time we recurse through each node

var invertTree = function(root) {
  if (root === null) return root; // If given a null root, return out the null root (handles if we enter a null child)

  // Basecase is if we reach a leaf (terminal node) return out root (handles leaf case)
  if (root.left === null && root.right === null) return root; // If the root has no children, simply return the root out (head)

  // Starting at our root
  // Swap algo left and right
  let temp = root.left; // temp hold our left root before we swap
  root.left = root.right; // set left root to right (invert it)
  root.right = temp; // set right root to temp var (left root)

  //once we have swapped, simply recurse into each root
  invertTree(root.left);
  invertTree(root.right);

  // Once we come back here, we simply return our root (head) since we are done iterating through our tree
  return root
};

//Let's make our tree first

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// Make our nodes (213 tree)

// let node1 = new TreeNode(1);
// let node3 = new TreeNode(3);
// let node2 = new TreeNode(2, node1, node3);

// console.log(node2);
// console.log(invertTree(node2)); // left is now 3 and right is now 1


// Making our bigger tree
// Input: root = [4,2,7,1,3,6,9] 4-27  2-13  7-69
// Output: [4,7,2,9,6,3,1]  4-72 2-31 7-96

// let node1 = new TreeNode(1);
// let node3 = new TreeNode(3);
// let node6 = new TreeNode(6);
// let node9 = new TreeNode(9);
// let node2 = new TreeNode(2, node1, node3);
// let node7 = new TreeNode(7, node6, node9);
// let node4 = new TreeNode(4, node2, node7); //root node (head)

// console.log(invertTree(node4));

