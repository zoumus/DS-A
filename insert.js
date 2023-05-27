// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 
// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105


var insert = function(intervals, newInterval) {
// let n = intervals.length;
    // let mergedInt = newInterval;
    // let res = [];

    // for(let i = 0; i < intervals.length; i ++) {
    //     let curInt = intervals[i];

    //     if(curInt[0] > mergedInt[1]) {
    //         return [...res, mergedInt, ...intervals.splice(i)];
    //     }  else if(mergedInt[0] >= curInt[1]) {
    //         res.push(curInt);
    //     } else {
    //         mergedInt = [Math.min(mergedInt[0], curInt[0]),Math.max(mergedInt[1], curInt[1])]
    //     }
    // }
    // return [mergedInt];

    let res = [];
    let start = 0;
    let end = 1

    i = 0;
    while(i<intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }
    while(i<intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[0] = Math.min(intervals[i][start], newInterval[start]);
        newInterval[1] = Math.max(intervals[i][end], newInterval[end]);
        i++;
    }
    res.push(newInterval)
    while(i<intervals.length && intervals[i][start] > newInterval[end]) {
        res.push(intervals[i]);
        i++;
    }
    return res;
};