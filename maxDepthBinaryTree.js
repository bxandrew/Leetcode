// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]

//         3
//     9         20
//           15      7

// Output: 3 (Max depth) 3-20-15 or 3-20-7

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

// Strategy:
// Recurse through to the depth of the recursive tree
// Basecase is if you have reached the depth of the tree (left and right are both null) return the counter
// We will have two recursive routes each time (a left and a right);
// If one route returns a higher counter use that counter as the max depth

// Maybe employ 2 counters? one for left route and one for right route

var maxDepth = function(root, depth = 0) {
  if (!root) return depth;
  let currDepth = depth //start depth at 0, increment by 1 each recursive call
  currDepth++; //each time we enter the recursive call, increase depth by 1

  // There are two routes to calculate depth initially and this will be the routes we eventually bubble up back to //
  let leftDepth = currDepth;
  let rightDepth = currDepth;

  //basecase if its at the very bottom of current tree, return out our current depth;
  if (root.left === null && root.right === null) return currDepth;

  if (root.left !== null) {
    //recurse down the left side of current root
    leftDepth = maxDepth(root.left, currDepth)
  }

  if (root.right !== null) {
    rightDepth = maxDepth(root.right, currDepth);
  }

  //if leftdepth is greater return leftdepth, else return rightdepth
  return leftDepth > rightDepth ? leftDepth : rightDepth;
};

//---- This memoized version does not work if there are non unique vals in the tree ----//

// const memoMaxDepth = (root, depth = 0, cache = {}) => {
//   if (!root) return depth;
//   if (cache[root.val] !== undefined) return cache[root.val];

//   let currDepth = depth;
//   currDepth++; //increment each recursive call
//   let leftDepth = currDepth;
//   let rightDepth = currDepth;

//   //check if we have our cached depth

//   if (root.left === null && root.right === null) {
//     //store the result in our cache and then return up
//     cache[root.val] = currDepth;
//     return currDepth; //store the value then return the value
//   }

//   if (root.left !== null) {
//     leftDepth = memoMaxDepth(root.left, currDepth, cache);
//   }

//   if (root.right !== null) {
//     rightDepth = memoMaxDepth(root.right, currDepth, cache);
//   }

//   cache[root.val] = leftDepth > rightDepth ? leftDepth : rightDepth;
//   return cache[root.val];
// }

// Attempting to do iterative solution to maxDepth
// Use a stack to hold the current root and its current depth
// Iterate through our entire tree

const iMaxDepth = (root) => {
  if (!root) return 0;
  let maxDepth = 0;
  const stack = [ [root, 1] ]; //start the stack off with our initial root element
  //do a while loop here, while our stack has things inside it
  while (stack.length) {
    //destructure our root and depth out
    const [currRoot, currDepth] = stack.pop();
    if (currDepth > maxDepth) maxDepth = currDepth;
    if (currRoot.left !== null) stack.push([currRoot.left, currDepth+1]);
    if (currRoot.right !== null) stack.push([currRoot.right, currDepth+1]);
  }

  return maxDepth;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//         3
//     9         20
//           15      7

const node7 = new TreeNode(7);
const node15 = new TreeNode(15);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20, node15, node7);
const node3 = new TreeNode(3, node9, node20);

// console.log(node3);

console.log(iMaxDepth(node3));