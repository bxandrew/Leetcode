function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// const aNode1 = new ListNode(1);
// const aNode2 = new ListNode(2);
// const aNode3 = new ListNode(4);
// aNode1.next = aNode2;
// aNode2.next = aNode3;

// const bNode1 = new ListNode(1);
// const bNode2 = new ListNode(3);
// const bNode3 = new ListNode(4);
// bNode1.next = bNode2;
// bNode2.next = bNode3;

var mergeTwoLists = function(list1, list2) {
  let currHead = new ListNode();
  let hasRun = false;

  if (list1 === null && list2 === null) {
    return list1;
  }

  const merge = (list1, list2, currNode) => {
    //if both lists are empty we are finished iterating through our linked list
    if (list1 === null && list2 === null) {
      return;
    }

    //if any of the two lists are empty just recurse through that pathway
    if (list1 === null && list2 !== null) {
      currNode.next = new ListNode(list2.val);
      currNode = currNode.next;
      list2 = list2.next;
      merge(list1, list2, currNode);
      return currNode;
    }

    if (list2 === null && list1 !== null) {
      currNode.next = new ListNode(list1.val);
      currNode = currNode.next;
      list1 = list1.next;
      merge(list1, list2, currNode);
      return currNode;
    }

    let nextNode;
    //find which node will be the next node
    if (list1 !== null && list1.val <= list2.val) {
      nextNode = new ListNode(list1.val)
      list1 = list1.next;
    } else if (list2 !== null && list2.val < list1.val) {
      nextNode = new ListNode(list2.val);
      list2 = list2.next;
    }

    //set the nextNode as head if currNode is undefined
    if (currNode.val === 0 && hasRun === false) {
      currNode = nextNode;
      hasRun = true;
    } else {
      //set the currNode's next as nextNode if it is defined
      currNode.next = nextNode;
      currNode = currNode.next;
    }

    merge(list1, list2, currNode);

    return currNode;
  }

  return merge(list1, list2, currHead);
};


// console.log(new ListNode(null));
// const firstResult = mergeTwoLists(aNode1, bNode1);
// console.log(firstResult); //1
// console.log(firstResult.next); //1
// console.log(firstResult.next.next); //2
// console.log(firstResult.next.next.next); //3
// console.log(firstResult.next.next.next.next); //4
// console.log(firstResult.next.next.next.next.next); //4 next null

//GOAL is to point the next node to the next lowest until we reach a point where one list is null then point to the non null list
var mergeTwoLists = function(list1, list2) {
  //if list1 is null return list2
  if (!list1) {
    return list2;
  //if list2 is null return list1
  } else if (!list2) {
    return list1
  } else if (list1.val <= list2.val) {
    //since list1 is the lowest, point the next to the return node
    list1.next = mergeTwoLists(list1.next, list2);
    //if list1's val is lower at the start, list1 is the head
    return list1
  } else {
    //since list2 is the lowest, point the next to the return node
    list2.next = mergeTwoLists(list1, list2.next);
    //if list2's val is lower at the start list2 is the head
    return list2
  }
};

//1, 2, 4
//1, 3, 4