// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// var searchMatrix = function(mat, target) {
    // ** linear solution
    // for(let i = 0; i < mat.length; i ++){
    //     for(let j=0;j<mat[i].length;j++){
    //         if(mat[i][j]===tar){
    //             return true
    //         }
    //     }
    // }
    // return false

    // ** log(n)+log(m) => log(n*m)
    // let rows = mat.length;
    // let cols = mat[0].length;

    // let top = 0, bottom = rows-1;
    // while(top <= bottom) {
    //     let row = top + Math.floor((bottom-top)/2);
    //     if(target > mat[row][cols-1]) {
    //         top = row + 1;
    //     } else if(target < mat[row][0]) {
    //         bottom = row - 1
    //     } else {
    //         break;
    //     }
    // }
    // if(top > bottom) return false;
    // let row = top + Math.floor((bottom-top)/2);
    let left = 0, right = cols-1;
    while(left <= right) {
        let mid = left + Math.floor((right-left)/2);
        if(target > mat[row][mid]) {
            left = mid + 1;
        } else if(target < mat[row][mid]) {
            right = mid - 1
        } else {
            return true;
        }
    }
    return false;
};