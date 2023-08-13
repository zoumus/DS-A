// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// 	// for loop through the array [1, 3, 5, 7]
// 		// if target < last number of subarray
// 			// binary search left = 1, right = 7 mid = 3 -> return true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// iterate through the matrix
// find subarray that matches conditionals
// binary search that subarray





// function searchTarget(matrix, target) {
	
// 	for (let i = 0; i < matrix.length; i ++) {
// 		let sub = matrix[i];
//         if(target > sub[sub.length - 1]) continue;
// 		let left = sub[0];
// 		let right = sub[sub.length - 1];
		
		// while(left <= right) {
		// 	let mid = Math.floor((left+right)/2);
		// 	if(target === sub[mid]) return true;
		// 	if(target > sub[mid]) {
		// 		left = mid - 1;
		// 	} else {
// 				right = mid + 1;
// 			}
// 		}
// }
// 	return false;
// }
