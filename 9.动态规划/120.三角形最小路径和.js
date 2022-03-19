/**
	题目：https://leetcode-cn.com/problems/triangle/
 
	[
		[2],
		[3,4],
		[6,5,7],
		[4,1,8,3]
	]
	相邻结点：与(i, j) 点相邻的结点为 (i + 1, j) 和 (i + 1, j + 1)。

	题解：https://leetcode-cn.com/problems/triangle/solution/di-gui-ji-yi-hua-dp-bi-xu-miao-dong-by-sweetiee/
*/

var triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

// 初始化二维数组
var initArr = function(len) {
	var arr=new Array();             //声明一维数组        
	for(var x=0;x<len;x++){
		arr[x]=new Array();        //声明二维数组
		for(var y=0;y<len;y++){
			arr[x][y]=0;          //数组初始化为0
		}
	}
	return arr;
}


const memo = initArr(triangle.length);

// ========= 解法一：暴力递归 ========= 
var dfs1 = function(triangle, i, j){
	if (i === triangle.length) return 0;
	return Math.min( dfs(triangle, i + 1, j), dfs(triangle, i + 1, j + 1)) + triangle[i][j]
}

var minimumTotal1 = function(triangle) {
	return dfs(triangle, 0, 0);
};

// ========= 解法二：记忆化方式优化（自顶向下） ========= 


var dfs2 = function(triangle, i, j) {
	if (i === triangle.length) return 0;
	if (memo[i][j]) {
		return memo[i][j];
	}
	return memo[i][j] = Math.min(dfs2(triangle, i + 1, j), dfs2(triangle, i + 1, j + 1)) + triangle[i][j]
}

var minimumTotal2 = function(triangle) {
	return dfs2(triangle, 0, 0);
};

// ========= 解法三：动态规划（自底向上） ========= 
/**
 * 1.状态定义：dp[i][j] 表示从点 (i, j) 到底边的最小路径和。 
 * 2.状态转移：dp[i][j]=min(dp[i+1][j],dp[i+1][j+1])+triangle[i][j]
 */
const dp = initArr(triangle.length+1);

console.log('dp', dp)
var minimumTotal3 = function(triangle) {
	let n = triangle.length;
	// 从三角形的最后一行开始递归
	for (let i = n - 1; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
		}
	}
	return dp[0][0];
};

console.log(minimumTotal3(triangle))




