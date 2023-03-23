// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

// Say we wanted to compute 621 + 354 normally. The sum is 975:

//    621
//  + 354
//  -----
//    975

// Then, the reversed linked list format of this problem would appear as:

//     1 -> 2 -> 6
//  +  4 -> 5 -> 3
//  --------------
//     5 -> 7 -> 9

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

function Node(val) {
  this.val = val;
  this.next = null;
}

// Input: Two linked lists
// Output: A linked list representing the sum of the two linked lists

// Strategy:
// Use an array to hold all the sum values as we iterate through the linked lists
// Handle cases where the linked list is uneven
// Then build our linked list by iterating through the array
// Return the head of the new linked list

// const addLists = (head1, head2) => {
//   let current1 = head1;
//   let value1 = [];
//   while (current1 !== null) {
//     value1.push(current1.val);
//     current1 = current1.next;
//   }

//   let current2 = head2;
//   let value2 = [];
//   while (current2 !== null) {
//     value2.push(current2.val);
//     current2 = current2.next;
//   }

//   const sum = String(
//     Number(value1.reverse().join("")) + Number(value2.reverse().join(""))
//   );
//   const dummyNode = new Node(null);
//   let tail = dummyNode;
//   for (let i = sum.length - 1; i >= 0; i--) {
//     tail.next = new Node(sum[i]);
//     tail = tail.next;
//   }

//   return dummyNode.next;
// };

// Strategy:
// If pointer of the linked list is null, pretend it is of value 0
// Use a carry variable, if carry exists (should only have a value of either 0 or 1), continue the loop
// const addLists = (head1, head2) => {
//   const dummyNode = new Node(null);
//   let tail = dummyNode;

//   let carry = 0;
//   let current1 = head1;
//   let current2 = head2;
//   // Loop while current1 is not null, current2 is not null, and carry not 0
//   while (current1 !== null || current2 !== null || carry !== 0) {
//     let value1 = current1 === null ? 0 : current1.val;
//     let value2 = current2 === null ? 0 : current2.val;
//     let sum = value1 + value2 + carry;
//     carry = 0; // Reset carry once we add to sum.
//     if (sum >= 10) {
//       sum = sum % 10;
//       carry = 1;
//     }

//     current1 = current1 === null ? null : current1.next;
//     current2 = current2 === null ? null : current2.next;
//     tail.next = new Node(sum);
//     tail = tail.next;
//   }

//   return dummyNode.next;
// };

// Recursive Solution to adding lists with a carry variable
// const addLists = (head1, head2, carry = 0) => {
//   if (head1 === null && head2 === null && carry === 0) return null;

//   const val1 = head1 === null ? 0 : head1.val;
//   const val2 = head2 === null ? 0 : head2.val;

//   const sum = val1 + val2 + carry;
//   const nextCarry = sum >= 10 ? 1 : 0;
//   const digit = sum % 10;

//   const next1 = head1 === null ? null : head1.next;
//   const next2 = head2 === null ? null : head2.next;

//   const resultNode = new Node(digit);
//   resultNode.next = addLists(next1, next2, nextCarry);
//   return resultNode;
// };

// Iterative Solution
// Time Complexity: O(max(n, m)) Whichever linked list is longer
// Space Complexity: O(max(n, m)) The list is as long as the longest linked list
const addLists = (head1, head2) => {
  const dummyNode = new Node(null);
  let tail = dummyNode;

  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  while (current1 !== null || current2 !== null || carry !== 0) {
    const value1 = current1 === null ? 0 : current1.val;
    const value2 = current2 === null ? 0 : current2.val;

    const sum = value1 + value2 + carry;
    carry = sum >= 10 ? 1 : 0;
    const digit = sum % 10;

    tail.next = new Node(digit);
    tail = tail.next;

    current1 = current1 === null ? null : current1.next;
    current2 = current2 === null ? null : current2.next;
  }

  return dummyNode.next;
};

//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
