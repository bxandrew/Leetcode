// Lowest common ancestor of a binary search tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


              //          6
              //    2          8
              // 0    4      7   9
              //    3   5


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.



// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Input: root node of tree and the two vals we want to look for
// Output: the ancestor (parent) that has both values inside it (either itself or its children have it)

// Strategy:
// Will need to iterate through the tree to find the matching values
// Evaluate the p and q given and determine if we should iterate onto the right or left side
// Use a stack to store parent nodes(ancestors)
// The node itself can be a common ancestor
// When we have found our nodes after iterating, compare out stack of ancestors (parents)
// Return the commonAncestor

// Use two stacks one for p, one for q
// Start from root and find p, as we iterate down the tree add the current node onto the stack
// Same for q
// After finding both nodes, iterate through the longer stack backwards and check against the second stack backwards

// Time Complexity O(n)
// Space Complexity O(n)

var lowestCommonAncestor = function(root, p, q) {
  let pStack = [];
  let qStack = [];

  let currNode = root; // Set current node to root

  while (currNode !== p) { // Find the p node first
    debugger;
    pStack.push(currNode); // Push parent into our stack

    if (p.val < currNode.val) { // if p is less than curr node (BST)
      //iterate down the left side
      currNode = currNode.left;
    } else {
      currNode = currNode.right;
    }
  }
  pStack.push(currNode); // After we have found it, also push itself onto the stack

  // Now find q node
  currNode = root;
  while (currNode !== q) {
    qStack.push(currNode);
    if (q.val < currNode.val) {
      currNode = currNode.left;
    } else {
      currNode = currNode.right;
    }
  }
  qStack.push(currNode);

  // Make stack equal size and then iterate backwards and check against each other
  if (pStack.length > qStack.length) {
    pStack = pStack.slice(0, qStack.length);
  } else {
    qStack = qStack.slice(0, pStack.length);
  }

  // console.log(pStack);
  // console.log(qStack);

  for (let i = pStack.length - 1; i >= 0; i--) {
    if (pStack[i] === qStack[i]) {
      return pStack[i];
    }
  }

  return null;

};


// Implementing a recursive approach
// const lowestCommonAncestor = function(root, p, q) {

// }

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}


let node9 = new TreeNode(9);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8, node7, node9);
let node3 = new TreeNode(3);
let node5 = new TreeNode(5);
let node4 = new TreeNode(4, node3, node5);
let node0 = new TreeNode(0);
let node2 = new TreeNode(2, node0, node4);
let node6 = new TreeNode(6, node2, node8);
let testRoot = node6;

// debugger;
// console.log(root);

// let result = lowestCommonAncestor(testRoot, node2, node4);
// console.log(result);