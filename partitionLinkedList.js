
// Input : the head of a linked list
// Output: the head of a sorted linked list
// We will use two queues to store the less than and greater than values
// Lets create a helper function to break up our linked list into two queues


function ListNode(val, next) {
  this.value = val
  this.next = next || null;
};


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



let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node7 = new ListNode(7, node4);
let node6 = new ListNode(6, node7);
let node3 = new ListNode(3, node6);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
// console.log(node1);

const queues = sortLinkedList(node1, 5);
const answer = buildLinkedList(queues);
debugger;
console.log(answer);