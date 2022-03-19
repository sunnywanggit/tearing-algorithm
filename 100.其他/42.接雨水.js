/**
 * 题目：https://leetcode-cn.com/problems/trapping-rain-water/
 * 
 * 思路：仅仅对于位置 i，能装下多少桶水，与左边最高的柱子和右边最高的柱子有关
 */

/**
 * @description 解法一：暴力解 
 * 时间复杂度 o(n2)
 * 空间复杂度 O(n)
 */
var trap = function(height) {
	if (!height.length) return 0;
	const len = height.length;
	let res = 0;

	for (let i = 1; i < len - 1; i++ ) {
		let l_max = 0;
		let r_max = 0;

		for(let j = i; j >=0; j--) {
			l_max = Math.max(l_max, height[j]);
		}


		for(let j = i; j < len; j ++) {
			r_max = Math.max(r_max, height[j]);
		}

		console.log(l_max, r_max);

		res += Math.min(l_max, r_max) - height[i];
	}
	
	console.log('res', res)
	return res;
};

// var trap = function(height) {
// 	if (!height.length) return 0;
// 	const len = height.length;
// 	let res = 0;

// 	const l_max = new Array(len);
// 	const r_max = new Array(len);

// 	l_max[0] = height[0] 
// 	r_max[len-1] = height[len-1]

// 	// 计算 l_max 从左到右
// 	for(let i = 1; i < len; i++) {
// 		l_max[i] = Math.max(height[i], l_max[i-1])
// 	}

// 	// 计算 r_max 从右到左
// 	for(let i = len-2; i >= 0; i--) {
// 		r_max[i] = Math.max(height[i], r_max[i+1])
// 	}

// 	for (let i = 1; i < len - 1; i++ ) {
// 		res += Math.min(l_max[i], r_max[i]) - height[i];
// 	}
	
// 	return res;
// };

/**
 * 
 * @description 双指针
 */
// var trap = function(height) {
// 	if (!height.length) return 0;
// 	const len = height.length;
// 	let res = 0;

// 	let left = 0;
// 	let right = len - 1;
	
// 	let l_max = height[0];
// 	let r_max = height[len-1];

// 	while(left <= right) {
// 		l_max = Math.max(l_max, height[left]);
// 		r_max = Math.max(r_max, height[right]);

// 		if(l_max < r_max) {
// 			res += l_max - height[left]
// 			left++
// 		} else {
// 			res += r_max - height[right]
// 			right--
// 		}
// 	}
// 	return res;
// };

// const height = [0,1,0,2,1,0,1,3,2,1,2,1]
const height = [4,2,0]

trap(height)