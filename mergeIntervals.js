// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// var merge = function(intervals) {
//     intervals.sort((a,b)=>a[0]-b[0]);
//     stack = [intervals[0]];
//     for (let i = 1; i < intervals.length; i ++) {
//         let [x, y] = intervals[i];
//         let lastIndex = stack.length - 1;
//         let [stX, stY] = stack[lastIndex];
//         if (stY >= x && y > stY) {
//             stack[lastIndex][1] = y;
//         } else if (x > stY) {
//             stack.push(intervals[i]);
//         }
//     }
//     return stack;
// };