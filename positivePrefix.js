// function maxPosPrefixes(arr) {
//     arr = arr.sort((a,b)=> b-a);
//     let pSumArr = [];
//     let pSum = 0;
//     let posNum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         pSum += arr[i];
//         pSumArr.push(pSum);
//     }
//     for(let i = 0; i < pSumArr.length; i++) {
//         if(pSumArr[i] > 0) posNum ++;
//     }
//     return posNum;
// }