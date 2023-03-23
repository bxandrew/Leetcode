// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Input: A head of a linked list and a targetVal to remove from the linked list
// Output: The same head of the linked list with the targetnode removed

// Strategy:
// Keep a pointer for null and for current
// Iterate down the linked list, if we hit our targetVal
//    Assign prev.next to current.next to essentially remove the node from the linked list
//    Break out and return the head

// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;

//   let previous = null;
//   let current = head;
//   while (current !== null) {
//     if (current.val === targetVal) {
//       previous.next = current.next;
//       break;
//     }
//     previous = current;
//     current = current.next;
//   }

//   return head;
// };

// Recursive Solution
const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};

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

removeNode(a, "c");
// a -> b -> d -> e -> f
