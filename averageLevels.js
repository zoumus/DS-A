// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
//  Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

create an empty array levels
create a helper function countAvg
[[3], [9, 20], [15, 7]]
  0       1           2

function averageLevels(root, levels = [], levelN = 0) {
	if(root === null) return;
	if(levels.length === levelN) {
		levels[levelN] =[ root.val];
} else {
		levels[levelN].push( root.val);
}
averageLevels(root.left, levels, levelN+1)
averageLevels(root.right,  levels, levelN+1)

let results = [];
for(let i = 0; i < levels.length; i++){
		results.push(avg(levels[i]);}

return results
}
}

function avg(arr) {
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
return sum/arr.length;
}

