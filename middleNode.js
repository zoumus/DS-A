// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// var middleNode = function(head) {
//     let slow = head;
//     let fast = head;

//     while(fast !== null && fast.next !== null){
//         slow = pointer1.next;
//         fast = pointer2.next.next;
//     }
//     return slow;
// };

// var middleNode = function(head) {
//     let pointer1 = head;
//     let pointer2 = head;

//     while(pointer2 !== null && pointer2.next !== null){
//         pointer1 = pointer1.next;
//         pointer2 = pointer2.next.next;
//     }
//     return pointer1;
// };