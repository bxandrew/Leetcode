// Write a function, leftyNodes, that takes in the root of a binary tree. The function should return an array containing the left-most value on every level of the tree. The array must be ordered in a top-down fashion where the root is the first element.

// Note that the left-most node on a level may not necessarily be a left child.

// Strategy:
// The key to doing this problem is to do a tree traversal but also keep a tracker for the current level the traversal is at
// When first encountering a level, if doing a left-first, DFS the first time we encounter a level will mean the left most node
// Simply save the value to the values array, with the level representing the index of the array

// const leftyNodes = (root) => {
//   const values = [];

//   const dfs = (root, level = 0) => {
//     if (root === null) return;
//     if (values[level] === undefined) values.push(root.val);

//     dfs(root.left, level + 1);
//     dfs(root.right, level + 1);
//   };

//   dfs(root);
//   return values;
// };

// Pivoting over to a BFS traversal, using a queue
// Simply do the same logic as a left-first DFS, however, use a BFS approach to assign the values
const leftyNodes = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [[root, 0]];
  while (queue.length > 0) {
    const [current, level] = queue.shift();
    if (values[level] === undefined) {
      values.push(current.val);
    }

    if (current.left !== null) queue.push([current.left, level + 1]);
    if (current.right !== null) queue.push([current.right, level + 1]);
  }

  return values;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

console.log(leftyNodes(a)); // [ 'a', 'b', 'd', 'g' ]
