function pairSum(numbers, targetSum) {
    const nums = {};
    for(let i = 0; i < numbers.length; i ++) {
      let num = numbers[i];
      let y = targetSum - num;
      if(nums[y] !== undefined) {
        return [nums[y], i];
      } else {
        nums[num] = i;
      } 
    }
}
//   Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// test_00:
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
// test_01:
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
// test_02:
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]
// test_03:
console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]
// test_04:
console.log(pairSum([9, 9], 18)); // -> [0, 1]
// test_05:
console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]