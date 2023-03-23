// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Input: The head of a linked list
// Output: The longest streak of the same value inside the given linked list

// Strategy:
// Use a variable to store longest streak
// Use a previous variable to compare current to
// If they are the same, increase the streak
// If they are not the same, reset the streak
// After finish iterating, return longest streak

const longestStreak = (head) => {
  let longest = 0;
  let streak = 0;

  let prevVal = null;
  let current = head;
  while (current !== null) {
    if (current.val === prevVal) {
      streak++;
    } else {
      // Break and reset the streak (to 1 bc we count the current node we are in)
      streak = 1;
    }

    if (streak > longest) longest = streak;

    prevVal = current.val;
    current = current.next;
  }

  return longest;
};

const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

console.log(longestStreak(a)); // 3
