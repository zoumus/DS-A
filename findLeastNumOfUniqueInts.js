// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// Constraints:

// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^9
// 0 <= k <= arr.length

var findLeastNumOfUniqueInts = function(arr, k) {
    let map = {};
    for(let i = 0; i < arr.length; i ++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    let reps = Object.values(map).sort((a,b)=>a-b);
    for(let i = 0; i < reps.length; i ++) {
        k -= reps[i];
        if(k < 0) return reps.length - i;
    }
    return 0;
};