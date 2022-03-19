/**
 * 题目：https://leetcode-cn.com/problems/rotate-image/
 */

// todo
var rotate = function(matrix) {
	let n = matrix.length;
	// 上下翻转，两种写法
	// 第二种 
	for (let i = 0; i < n / 2; i ++){
		let tmp = matrix[i];
		matrix[i] = matrix[n - i - 1];
		matrix[n - i - 1] = tmp;
	}
	// 对角翻转
	for (let i = 0; i < n; i ++){
		for (let j= i + 1; j < n; j++){
			let tmp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = tmp;
		}
	}
};