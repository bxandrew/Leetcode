// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Input: The head of each sorted linked list to be merged
// Output: One merged sorted linked list

// Strategy:
// Initialize the pointer at the lower value of the two nodes
// Tail pointer will be initalized at this head

// const mergeLists = (head1, head2) => {
//   // todo
//   let mergedHead;
//   let current1;
//   let current2;
//   if (head1.val < head2.val) {
//     mergedHead = head1;
//     current1 = head1.next;
//     current2 = head2;
//   } else {
//     mergedHead = head2;
//     current1 = head1;
//     current2 = head2.next;
//   }
//   let tail = mergedHead;

//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       tail.next = current1;
//       current1 = current1.next;
//     } else {
//       tail.next = current2;
//       current2 = current2.next;
//     }

//     tail = tail.next;
//   }

//   if (current1 === null) tail.next = current2;
//   if (current2 === null) tail.next = current1;

//   return mergedHead;
// };

// Using a dummy node algorithmic strategy
// Start the merged list with a dummy node
// Set two pointers on each head of the sorted linked list
// Place tail pointer on the dummy node so we can build it and return the dummy node's next at the end

// const mergeLists = (head1, head2) => {
//   const dummyNode = new Node(null);
//   let tail = dummyNode;
//   let current1 = head1;
//   let current2 = head2;
//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       tail.next = current1;
//       current1 = current1.next;
//     } else {
//       tail.next = current2;
//       current2 = current2.next;
//     }

//     tail = tail.next;
//   }

//   if (current1 === null) tail.next = current2;
//   if (current2 === null) tail.next = current1;

//   return dummyNode.next;
// };

// Recursive Solution
// const mergeLists = (head1, head2) => {
//   const dummyNode = new Node(null);

//   const merge = (head1, head2, tail) => {
//     if (head1 === null && head2 === null) return;
//     if (head1 === null) {
//       tail.next = head2;
//       return;
//     }
//     if (head2 === null) {
//       tail.next = head1;
//       return head1;
//     }

//     if (head1.val < head2.val) {
//       tail.next = head1;
//       merge(head1.next, head2, tail.next); // Advance head1 pointer and tail pointer
//     } else {
//       tail.next = head2;
//       merge(head1, head2.next, tail.next);
//     }
//   };

//   merge(head1, head2, dummyNode);

//   return dummyNode.next;
// };

const mergeLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
};

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
