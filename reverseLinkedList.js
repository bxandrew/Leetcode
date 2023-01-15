
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
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// ----- Recursive Strategy ----- //
// Starting at Node 1, Store node 2 in a variable
// Point 1's next to null, (begining to build our reverse linked list),
// Recurse through bringing in our new head and our new list
// Once we hit the end, return our built (reversed) linked list

const reverseList = (head, reversedList = null) => {
  // If our head is null, we have reached the end of our original linked-list //
  if (head === null) {
    return reversedList;
  }
  const nextNode = head.next; //Save the head of the next node beforing severing the connection

  head.next = reversedList; // Set our next to our reversedList (initially it will be null)
  reversedList = head; // Then set our reversedList as the new head (which is the new linked-list)

  // Now that we have severed the head off //
  // Recursively call our function with our nextNode and our reversed list we are building //
  return reverseList(nextNode, reversedList);
}

//----- Iterative Strategy -----//
// Iterate through the head until we hit the end
// Somehow store each head in an array
// Then iterate through the array and build a new list from that

// const reverseList = (head) => {
//   // Edgecase here, not sure when head will equal falsey though //
//   if (!head) {
//     return head;
//   }

//   const heads = [];
//   // Iterate through our linked-list via a while loop //
//   // Store the heads in our heads array (with severed next) //
//   while (head !== null) {
//     let nextNode = head.next;
//     head.next = null;
//     heads.push(head);
//     head = nextNode;
//   }

//   // At this point we have stored all of our heads in the heads array //
//   // Iterate through it backwards and build our reverse list //

//   let reversedListHead = heads.pop(); //Initialize our reversed list with the last node on the heads array
//   let currNode = reversedListHead;
//   for (let i = heads.length - 1; i >= 0; i--) {
//     //Set our currNode's next to our current iteration element
//     currNode.next = heads[i];
//     //Then set our currNode to be the head we just attached
//     currNode = currNode.next;
//   };

//   return reversedListHead;
// }

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
// console.log(node1);

// console.log('Our current Linked-List: ', node1);
console.log(reverseList(node1)); // should eq 54321 linked list