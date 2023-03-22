// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// Input: Head of a linked-list;
// Output: If the linked list only contained one value

// Strategy:
// Use a current pointer to traverse the linked list
// Store the first value from the initial head and check it as we iterate
// If it is different, return out false

// const isUnivalueList = (head) => {
//   let checkValue = head.val;
//   let current = head;
//   while (current !== null) {
//     if (checkValue !== current.val) return false;
//     current = current.next;
//   }

//   return true;
// };

// const isUnivalueList = (head) => {
//   const check = (head, checkValue) => {
//     if (head === null) return true;
//     if (head.val !== checkValue) return false;

//     return check(head.next, checkValue);
//   };

//   return check(head, head.val);
// };

const isUnivalueList = (head, value = null) => {
  if (head === null) return true;
  // If we have just started, or the value is equal keep iterating with the current head's val
  if (value === null || head.val === value) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true
