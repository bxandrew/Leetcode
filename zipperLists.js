// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

function Node(val) {
  this.val = val;
  this.next = null;
}

// Input: Two heads of two linked lists
// Output: The lists combined together

// Strategy:
// Keep a tail pointer that starts off as the head1 (Keeping tail pointer here is the important key in this algorithm)
// Start head1 current at the next node because our tail starts off with list1 head
// Start our head2 current pointer at its head
// Iterate through the lists one node at a time using the count to alternate taking nodes between each list.
// Concat the rest of the list to the tail at the end to finalize our merged linked list.

// Time Complexity: O(min(n, m)) Smaller of the two linked lists because we can just concat the rest of the the other lists once we finish iterating through the smaller list
// Space Complexity: O(1) We dont use any extra space besides the 3 pointers and 1 counter variable in the beginning.

// const zipperLists = (head1, head2) => {
//   let tail = head1; // Tail keeps track of where our tail is while we merge linked lists

//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;
//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       // If even take from list 2 and append onto the tail
//       tail.next = current2;
//       tail = tail.next;
//       current2 = current2.next;
//       count++;
//     } else {
//       tail.next = current1;
//       tail = tail.next;
//       current1 = current1.next;
//       count++;
//     }
//   }

//   if (current1 !== null) {
//     tail.next = current1;
//   } else if (current2 !== null) {
//     tail.next = current2;
//   }

//   return head1;
// };

// Recursive Solution to zipper
// Time Complexity: O(n)
// Space Complexity: O(n)
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
