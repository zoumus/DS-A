// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 
// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

var minSubArrayLen = function(target, nums) {
    // let left = 0;
    // let total = 0;
    // let minSub = Infinity;

    // for(let i = 0; i < nums.length; i ++) {
    //     total += nums[i];

    //     while (total >= target) {
    //         minSub = Math.min(minSub, i - left +1);
    //         total -= nums[left];
    //         left ++;
    //     }
    // }
    // if (minSub == Infinity) return 0;
    // else return minSub
    // return minSub;

    let start = 0;
    let end = 0;
    let minValue = Infinity;
    let subarraySum = nums[0];
    while(start <= end && end <nums.length){
        if(subarraySum >= target){
            minValue = Math.min(minValue, end-start+1);
            subarraySum -= nums[start];
            start++;
        } else {
            end++;
            subarraySum += nums[end];
        }
    }
    return minValue === Infinity  0 : minValue;
}