// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]
 
// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.


 // create a hash table from arr1
 // iterate over arr2 to create output into new array
 // iterate over hashtable to output the remaining variables into the output array
 // return the output array
 
//  var relativeSortArray = function(arr1, arr2) {
//     let count = {};
//     let outputArr = [];
//     let sortArr = [];

    // for(let i = 0; i < arr1.length; i++) {
    //     let num1 = arr1[i];
    //     if(count[num1]) {
    //         count[num1] ++;
    //     } else {
    //         count[num1] = 1;
    //     }
    }
    // for(let i = 0; i < arr2.length; i++){
    //     let num2 = arr2[i];
    //     while(count[num2] > 0){
    //         outputArr.push(num2);
    //         count[num2] -= 1;
    //     }
//     }
//     for(let key in count){
//         if(count[key] > 0) {
//             while(count[key] > 0) {
//                 outputArr.push(key);
//                 count[key] -= 1;
//             }
//         }
//     }
//     return outputArr;
    
// }