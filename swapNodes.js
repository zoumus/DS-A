

var swapNodes = function(head, k) {
    let curr = head;
    let right = head;
    
    for(let i = 1; i < k; i++) {
        curr = curr.next;
    }
    let left = curr;
    while(curr.next) {
        curr = curr.next;
        right = right.next;
    }
    [left.val, right.val] = [right.val, left.val];
    return head;
};