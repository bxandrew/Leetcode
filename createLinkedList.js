// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Input: An array of values
// Output: The head of the created linked-list

// Strategy:
// Create a dummy node at first and build the linked list
// As we iterate through our array, create new nodes and insert them into our linked list
// Return dummyNode.next (our built linked list)
// This also handles the situation where the array of values is empty, we will just return null.

// Time Complexity: O(n)
// Space Complexity: O(n) because we are creating the length of values * new nodes.
const createLinkedList = (values) => {
  const dummyNode = new Node(null);

  let tail = dummyNode;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }

  return dummyNode.next;
};

// Recursive Solution
const createLinkedList = (values, index = 0, head = new Node(null)) => {
  if (index === values.length) return null;
  head.next = new Node(values[index]);
  createLinkedList(values, index + 1, head.next);
  return head.next;
};

// Or a simpler recursive solution:
const createLinkedList = (values, index = 0) => {
  if (index >= values.length) return null;
  head = new Node(values[index]);
  head.next = createLinkedList(values, index + 1);
  return head;
};

createLinkedList(["h", "e", "y"]);
// h -> e -> y
