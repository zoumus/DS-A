// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 
// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
//  \
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = fast;
    let count = 0;

    while (fast !== null && fast.next !== null) {
        fast = fast.next;

        if (count >= n) {
            slow = slow.next
        }
        count ++
    }
    if ( count + 1 === n) return slow.next;
    slow.next = slow.next.next
    return head;

    // let fast = head, slow = head;

    // for(let i = 0; i < n; i ++) {
    //     fast = fast.next;
    // };

    // if(!fast) return slow.next;
    // while(fast !== null && fast.next !== null) {
    //     fast = fast.next;
    //     slow = slow.next;
    // }
    // slow.next = slow.next.next;
    // return head;
};