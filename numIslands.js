// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 
// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


var numIslands = function(grid) {
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    const dfs = (y, z) => {
	    if(y < 0 || z < 0 || y >= rows || z >= cols || grid[y][z] !== '1') return;
        grid[y][z] = 'x'

        dfs(y+1, z);
        dfs(y, z+1);
        dfs(y-1, z);
        dfs(y, z-1);
    }

//     for(let i = 0; i < rows; i ++) {
//         for(let j = 0; j < cols; j ++) {
//             if(grid[i][j] === '1') {
//                 count ++;
//                 dfs(i, j);
//             }
//         }
//     }
//     return count;
// }