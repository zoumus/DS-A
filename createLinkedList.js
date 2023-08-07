// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// test_00:
// createLinkedList(["h", "e", "y"]);
// // h -> e -> y
// test_01:
// createLinkedList([1, 7, 1, 8]);
// // 1 -> 7 -> 1 -> 8
// test_02:
// createLinkedList(["a"]);
// // a
// test_03:
// createLinkedList([]);
// // null

// const createLinkedList = (values) => {
//     let head = new Node(null);
//     let current = head
//     for (let i = 0; i < values.length; i ++) {
//       current.next = new Node(values[i]);
//       current = current.next;
//     }
//     return head.next;
// };

