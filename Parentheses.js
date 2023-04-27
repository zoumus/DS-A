// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    let stack = [];
    let hash = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    
    for (let i = 0; i < s.length; i++) {
        var input = s[i]; 
        if (input in hash) {
            if (stack.pop() !== hash[input] ) {
                return false;
            }
        } else {
            stack.push(input)
        }
    };
    
    return stack.length === 0
};