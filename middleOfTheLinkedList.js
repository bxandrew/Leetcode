// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Input: the head of the linked-list
// Output: The middle node in the linked list (if two middles, the second one is the middle)

// Strategy: Keep two pointers, slow one that goes 1 step at a time, and fast one that goes 2 steps at a time
// When the fast pointer reaches the end or null return the slow pointer's reference

// Time Complexity: O(n)
// Space Complexity: O(1)
// Constant space complexity because only two pointers are being used here and it does not depend on the length of the input linked list.

var middleNode = function (head) {
  let slow = head; // Move one node at a time
  let fast = head; // Move two nodes at a time

  // If fast is null or at the end of linked-list, exit out of while loop
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Assign to the next node.

    // If fast is at the last node or, the 2nd to last node (it's at the end position)
    if (fast.next === null || fast.next.next === null) {
      fast = null;
    } else {
      fast = fast.next.next; // Assign to the next node's next (moving 2 nodes);
    }
  }

  return slow;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
