// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Input: The head of a node, a value representing a new node and an index to insert the node at
// Output: The head of the node with the inserted node

// Strategy:
// Keep a previous pointer and a current pointer
// Iterate through the linked-list until we find the correct index position
// Assign prev node's next to the new node and then the new node's next to the current node and then return our head
// If not in the correct index, iterate to the next node and increment the index counter

// const insertNode = (head, value, index) => {
//   let newNode = new Node(value);
//   if (index === 0) {
//     newNode.next = head;
//     return newNode;
//   }

//   let currIndex = 0;
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     if (currIndex === index) {
//       prev.next = newNode;
//       newNode.next = current;
//       return head;
//     }
//     currIndex += 1;
//     prev = current;
//     current = current.next;
//   }

//   prev.next = newNode;
//   return head;
// };

// Using a strategy where we only need to keep a current pointer and a count variable
// Time Complexity: O(n)
// Space Complexity: O(1)
const insertNode = (head, value, index) => {
  // Edge case if we are trying to insert the new node at the head
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      // We are in position to insert the new node in front of us
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
      break;
    }
    current = current.next;
    count += 1;
  }

  return head;
};

// Recursive solution to inserting a node.
// const insertNode = (head, value, index, count = 0) => {
//   // if (head === null) return null;
//   if (index === 0) {
//     const newNode = new Node(value);
//     newNode.next = head;
//     return newNode;
//   }

//   if (count === index - 1) {
//     const next = head.next;
//     head.next = new Node(value);
//     head.next.next = next;
//     return head;
//   }

//   insertNode(head.next, value, index, count + 1);
//   return head;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, "x", 2);
// a -> b -> x -> c -> d
