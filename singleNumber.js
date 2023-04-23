// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

ch element in the array appears twice except for one element which appears only once.

var singleNumber = function(nums) {
    let output = {};

    for(let num of nums) { //of for arrays
        if (output[num])  {
            output[num] += 1;
        } else {
            output[num] = 1;
        }
    }
    for(let key in output) { // in for hashes
        if(output[key] === 1) return key;
    }
};