// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

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

// console.log(head); //1's head
// console.log(head.next); //2's head
// console.log(head.next.next); // 3's head

var swapPairs = function(head) {
  // Edgecase is if our head is empty or has no next, simply return our head //
  if (!head || !head.next) {
    return head;
  }

  // ListNode swap algo //
  const temp = head.next; // store 2's head here
  head.next = head.next.next // point 1's next to 3's head // Becareful here, we can no longer use head.next
  temp.next = head //point 2's next (2 is temp currently) to 1's head
  head = temp; //set our new head to be 2's head

  // If there is a next node after our swap (#3 head) recurse through.
  if (head.next.next !== null) {
    head.next.next = swapPairs(head.next.next); //should return a head
  } else { // Else just let us return our head
    return head;
  }

  return head; // Return our head out of our recursive function //
};



//--- Note: Arrow functions cannot be used as constructors ---//
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = (next === undefined ? null : next);
}

const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// console.log(node1);
console.log(swapPairs(node1));
