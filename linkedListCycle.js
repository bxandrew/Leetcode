// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// write down time and space complexity of both approaches. O(n) time complexity fo
// r both recursive and iterative approach since we visit each node at least once.
// O(n) space complexity for recursive call because of having to make more variable
// s as we recurse through until we hit our base case. O(1) space complexity for it
// erative approach since we are reusing the same variables as we iterate through t
// he linked-list.

// Strategy:
// I believe that checking for if the linked-list has a cycle is to use two pointers.
// One pointer will iterate through the linked-list one step at a time
// Second pointer will iterate through the linked-list two steps at a time
// If second pointer ever hits a node where pointer one is, the linked-list is cyclical

// Stop iterating once a pointer reaches null. (Confirmation that it is not cyclical)

// Recursive way needs more work.
// Time Complexity O(n)
// Space Complexity O(n)
// var hasCycle = function(head, pointerOne, pointerTwo) {
//   if (head === null || head.next === null) return false; //If head is ever null or its next is null (we have reached the end)

//   // Setup starting points for our pointers
//   if (pointerOne === undefined && pointerTwo === undefined) {
//     pointerOne = head;
//     pointerTwo = head.next;
//   }

//   if (pointerOne === pointerTwo) return true; // If the pointers ever stack on top of each other, it is cyclical

//   // This statement also prevents attempting to access a null objects .next property
//   if (pointerTwo === null || pointerTwo.next === null) { // If pointerTwo ever points to null or it's next is pointing to null return false; End of linked-list
//     return false;
//   }

//   return hasCycle(head.next, pointerOne = pointerOne.next, pointerTwo = pointerTwo.next.next)

// };


//----- Iterative Solution -----//
// Strategy:
// Two Pointers Strategy (called slow and fast)
// Slow pointer will be the head itself (moving one step at a time)
// Fast pointer will be called fast (moving 2 steps at a time)
// Set fast initially to be head (both starts at point 0)

// *** While condition will check if fast exists and if fast.next exists (vital to not breaking the code for access nullobject properties) ***
// This means we can access current nodes next, and next nodes next

// Set fast = fast.next.next
// Set slow(head) = head.next

// Check against each other (head === fast)
//    If they are equal by reference they are on same node, return true;

// Else keep iterating through the linked-list

// If we ever break out of while loop, condition has failed (either fast is null or fast.next is null) Null means we have reached the end
// Return false

// Time Complexity O(n)
// Space Complexity O(1)

const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) { //while fast is not null and fast.next is not null
    fast = fast.next.next;
    head = head.next;
    if (fast === head) return true;
  }
  //if we can exit out of the while loop that means it is not cyclical
  return false;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// let node3 = new ListNode(3);
// let node2 = new ListNode(2);
// let node0 = new ListNode(0);
// let node4 = new ListNode(-4);

// //head is node3
// node3.next = node2;
// node2.next = node0;
// node0.next = node4;
// node4.next = node2;

// console.log(node3);
// console.log(hasCycle(node3));

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// node1.next = node2;

// // console.log(node1);

// console.log(hasCycle(node1));