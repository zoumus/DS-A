// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 
// Constraints:

// n == nums.length
// nums[i] is either 0, 1, or 2.


// var sortColors = function(nums) {
    // let counts = [0, 0, 0];

    // for(let i = 0; i < nums.length; i ++){
    //     let num = nums[i];
    //     counts[num] += 1;
    // }
    // let a = 0;
    // for(let c = 0; c < counts.length; c ++){
    //     let count = counts[c];
    //     for(let d = 0; d < count; d ++) {
    //         nums[a] = c;
    //         a++;
    //     }
    // }
    // return nums

    let zeros = 0, ones = 0, twos = 0;

    for(let n of nums){
        n === 0 ? zeros++ : n === 1 ? ones++ : twos++;
    }
    for(let i = 0; i < nums.length; i++){
        i < zeros ? nums[i] = 0 : i < zeros+ones ? nums[i] = 1 : nums[i] = 2;
    }
    return nums;
}