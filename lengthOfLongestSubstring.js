// Given a string s, find the length of the longest 
// substring
// without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;

    let maxLength = 0;
    let window = new Set();

    while (right < s.length) {
        while (window.has(s[right])) {
            window.delete(s[left]);
            left ++;
        }
        
        maxLength = Math.max(maxLength, (right - left) + 1);
        window.add(s[right]);
        right ++;
        console.log(window);
    }
    return maxLength
};