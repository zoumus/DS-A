// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 
// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function(s, t) {

    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;

    if (s.length !== t.length) return false
//     const obj = {}
//     for ( let i = 0; i < s.length; i++) {
//         const ss = s[i]
//         obj[ss] = obj[ss] ? obj[ss] + 1 : 1

//         const tt = t[i]
//         obj[tt] = obj[tt] ? obj[tt] - 1 : -1
//     }

//     return Math.max(...Object.values(obj)) === 0

};