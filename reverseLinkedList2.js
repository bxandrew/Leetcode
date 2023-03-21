// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

function Node(val) {
  this.val = val;
  this.next = null;
}

// Input: Head of a linked list
// Output: Head of the reversed linked list

// Strategy:
// As we iterate through the linked list, point it's next to the previous before iterating forward
// Previous should be set to null at first since we start at the head of the linked list
// Once we have finished iterating through the linked-list (simply return the head that should be shoulded on previous if we iterate to null)

// Time Complexity: O(n) because we visit each node
// Space Complexity: O(1) because we only use 3 variables
const reverseList = (head) => {
  let previous = null;
  let current = head;
  while (current !== null) {
    let tempNext = current.next;
    current.next = previous;

    previous = current; // Move previous to current
    current = tempNext; // Move current to the next node
  }

  return previous;
};

// Time Complexity: O(n) because we recursively visit each node
// Space Complexity: O(n) because we hold each node on the call stack before bubbling up
// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;

//   // Swapping algorithm for linked-list
//   let tempNext = head.next;
//   head.next = prev;
//   prev = head;

//   return reverseList(tempNext, prev);
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a
