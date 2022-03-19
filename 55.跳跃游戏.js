/**
 * 题目：https://leetcode-cn.com/problems/jump-game/
 */

// todo 还可以使用动态规划求解，这个下来自己看一下

/**
 * @description 骚解法 
 * 题解：https://leetcode-cn.com/problems/jump-game/solution/55-by-ikaruga/
 */
var canJump = function(nums) {
	// 前 n-1 个元素能够跳到的最远距离
	let k = 0;
	for (let i = 0; i <= k; i++) {
		// 第 i 个元素能够跳到的最远距离
		const jump = i + nums[i];
		// 更新最远距离
		k = Math.max(k, jump);
		//如果最远距离已经大于或等于最后一个元素的下标,则说明能跳过去,退出. 减少循环
		if (k >= nums.length - 1) {
			return true;
		}
	}
	//最远距离k不再改变,且没有到末尾元素
	return false;
};


var nums = [3,2,1,0,4]

console.log(canJump(nums))