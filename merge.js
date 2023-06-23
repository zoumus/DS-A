// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        let prev_start = res[res.length-1][0];
        let prev_end = res[res.length-1][1];
        let start = interval[0];
        let end = interval[1];

        if(prev_end >= start) {
            res[res.length-1][0] = Math.min(start, prev_start);
            res[res.length-1][1] = Math.max(end, prev_end);
        } else {
            res.push(interval)
        }
    }
    return res;
};