// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
//  Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// create an empty array levels
// create a helper function countAvg
// [[3], [9, 20], [15, 7]]
//   0       1           2

var averageOfLevels = function(root, level = [], levelNum = 0) {
    let result = [];
    if (root === null) return 0;
    if (level.length === levelNum) {
        level[levelNum] = [root.val]
    } else {
        level[levelNum].push(root.val)
    }
    averageOfLevels(root.left, level, levelNum + 1);
    averageOfLevels(root.right, level, levelNum + 1);
    for(let i = 0; i < level.length; i++) { //[[3], [9,20], [15,7]]
       result.push(avg(level[i]));
    }
    return result;
};

function avg(arr) {//[3]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let res = sum/arr.length;
    return res;
}


//second one
var averageOfLevels = function(root) {
    let queue = [root]
    let lvl = 1
    const avgs = []
    while(queue.length) {
        const newQueue = []
        let sum = 0
        let total = queue.length
        for(let i = 0; i < queue.length; i++) {
            const node = queue[i]
            sum += node.val;
            if(node.left) {
                newQueue.push(node.left)
            }

            if(node.right) {
                newQueue.push(node.right)
            }
        }

        avgs[lvl - 1] = sum / total
        lvl++
        queue = newQueue
    }

    return avgs;
};
