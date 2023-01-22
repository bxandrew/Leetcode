// Given a binary tree, determine if it is height-balanced.
// Height-Balanced
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

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

// Strategy:
// Calculate the depth of each child node and then compare to each other
// Calc depth by iterating through the node until it reaches a leaf (both left and right are null)
// Once reaching a leaf, return up the depth of the node.
// Two depths are returned by each node, take the max depth to compare (left vs right)

// Let's a the recursive approach

// Explanation: (Had to eventually look at a solution implementation)
// The strategy is VERY similar to finding max depth, just with an extra check to see if the tree is balanced.

// If the root given is null, return true (edgecase);
// Use a helper function to determine if the left or right nodes are balanced

// Inside our helper function, if the root given was null return the depth - 1 (go back one depth to return the true depth of the node)
// Our left tree depth is then to recursive call with our left node with a depth incremented by 1
// Same with right tree depth

// If ever our left or right depth is equal to -1 (a value we set ourselves when unbalanced) return out -1 (indicating that node is unbalanced)
// If our nodes depths are ever of a greater difference than 1 (it is unbalanced, return out -1)
// If niether of those -1 conditions are hit, we return out our max depth of the current node (determine which is bigger, right or left then return it)

// Finally at the end, check to see if invoking our helper function returns -1, if it does, nodes were unbalanced, return false
// If it doesnt return -1, that means our tree is balanced. We don't care about the actual depth so we go ahead and return out true;

// Time complexity: O(n) because we visit each and every node of the tree
// Space complexity: O(n) because we make new variables each time we visit each node of the tree

var isBalanced = function(root) {
  if (root === null) return true; //edgecase if empty root is given

  //use depth helper function to determine if it is balanced
  const findMaxDepth = (root, depth = 0) => { //start at depth 0
    if (root === null) return depth-1;

    let leftDepth = findMaxDepth(root.left, depth+1); //go into left tree node, increment depth by 1
    let rightDepth = findMaxDepth(root.right, depth+1); // go into right tree node increment depth by 1

    if (leftDepth === -1 || rightDepth === -1) return -1; //if either left or right depth is -1, one of the nodes was unbalanced
    if (Math.abs(leftDepth - rightDepth) > 1) return -1; //return out -1 if the depths are unbalanced (greater than 1 depth difference)

    //if everything is ok, return the max depth between the two nodes
    let maxDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return maxDepth;
  }

  if (findMaxDepth(root) === -1) return false; //if maxDepth returns -1 at any point, some node was unbalanced, return false
  //if our if statement does not get hit, it means that all nodes were balanced, return true;
  return true;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// Input: root = [3,9,20,null,null,15,7]    3-9/20      9-null/null     20-15/7
// Output: true

let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node20 = new TreeNode(20, node15, node7);
let node9 = new TreeNode(9);
let node3 = new TreeNode(3, node9, node20);

console.log(isBalanced(node3)); // true;




// Input: root = [1,2,2,3,3,null,null,4,4]  1-2/2    2-3/3    3-4/4
// Output: false

// let leftNode4 = new TreeNode(4);
// let rightNode4 = new TreeNode(4);
// let leftNode3 = new TreeNode(3, leftNode4, rightNode4);
// let rightNode3 = new TreeNode(3);
// let leftNode2 = new TreeNode(2, leftNode3, rightNode3);
// let rightNode2 = new TreeNode(2);
// let node1 = new TreeNode(1, leftNode2, rightNode2);

// console.log(isBalanced(node1)); //false