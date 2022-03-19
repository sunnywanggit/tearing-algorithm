/**
 * 题目：https://leetcode-cn.com/problems/minimum-path-sum/
 */


// 题解：https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-dong-tai-gui-hua-gui-fan-liu-c/
// todo 这道题下来需要多看几遍 和 120 对比一下，看看能不能用 120 的解法来求解

// var minPathSum = function(grid) {
// 	for(let i = 0; i < grid.length; i++) {
// 		for(let j = 0; j < grid[0].length; j++) {
// 			if(i == 0 && j == 0) continue;
// 			else if(i == 0)  grid[i][j] = grid[i][j - 1] + grid[i][j];
// 			else if(j == 0)  grid[i][j] = grid[i - 1][j] + grid[i][j];
// 			else grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
// 		}
// 	}
// 	return grid[grid.length - 1][grid[0].length - 1];
// };

var dfs = function(grid, i, j) {

}

var minPathSum = function(grid) {
	return

}
var grid = [[1,3,1],[1,5,1],[4,2,1]]

console.log(minPathSum(grid))
