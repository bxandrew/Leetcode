// ----- Problem Name
// Partition Linked List
// ----- Description
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.


function ListNode(val, next) {
  this.value = val
  this.next = next || null;
};


// Input : the head of a linked list
// Output: the head of a sorted linked list
// We will use two queues to store the less than and greater than values
// Lets create a helper function to break up our linked list into two queues


// Naive approach
// Time Complexity: O(n);
// Space Complexity: O(n);
const sortLinkedList = (head, x) => {
  // It will return an object with two arrays stored in them (acting as queues)
  const lessThan = [];
  const greaterThan = [];

  let currNode = head;

  // eval if currNode's value is less than x
  while (currNode !== null) {
    if (currNode.value < x) {
      lessThan.push(currNode);
    } else {
      greaterThan.push(currNode);
    }
    currNode = currNode.next;
  }

  return {lessThan: lessThan, greaterThan: greaterThan};
}

// Rebuild our linked list from our two queues
// buildLinkedList(sortLinkedList(head, x));


const buildLinkedList = (queues) => {
  //queues is an object
  // { lessThan, greaterThan } = queues; // two queues of lessthan and greater than
  lessThan = queues.lessThan;
  greaterThan = queues.greaterThan;


  let head;
  let currNode;

  let lessThanPointer = 0;
  // iterate through our lessThan
  while (lessThanPointer < lessThan.length) {
    if (head === undefined) {
      head = lessThan[lessThanPointer];
      currNode = lessThan[lessThanPointer];
    }

    currNode.next = lessThan[lessThanPointer];
    currNode = currNode.next;

    lessThanPointer++;
  }

  let greaterThanPointer = 0;
  while (greaterThanPointer < greaterThan.length) {
    if (head === undefined) {
      head = greaterThan[greaterThanPointer];
      currNode = greatherThan[greaterThanPointer];
    }

    currNode.next = greaterThan[greaterThanPointer];
    currNode = currNode.next;

    greaterThanPointer++;
  }

  return head; //should be our sorted linked list
}


// Attempting O(1) Space Complexity Solution //

// Need to make use of two pointers, front and back pointers
// Iterate through the linkedlist once to get the pointer to the last node
// Then iterate through it again but this time if the value is greater than x we will move it to the back of the linked list and move our pointer to that node

// Helper function to iterate through the linked-list and grab the tail node
const grabTail = (head) => {
  let currNode = head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

const partitionList = (head, x) => {
  let front; // Front pointer
  let back = grabTail(head); // Back pointer

  let currHead = head;
  // Lets make sure our head is in the correct spot, else we will have to change our head
  while (!(currHead.value < x)) {
    let temp = currHead.next; // Store next node
    back.next = currHead; // Place first node to the back
    back = back.next;
    currHead = temp; //
  }

  //once we establish head, we can evaluate next values instead of self values.
}





let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node7 = new ListNode(7, node4);
let node6 = new ListNode(6, node7);
let node3 = new ListNode(3, node6);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
// console.log(node1);
// console.log(grabTail(node1));
// console.log(node1);
partitionList(node1, 5)

// const queues = sortLinkedList(node1, 5);
// const answer = buildLinkedList(queues);
// debugger;
// console.log(answer);