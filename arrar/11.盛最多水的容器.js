/**
 * 题目： https://leetcode-cn.com/problems/container-with-most-water/
 *
 * 思路：对撞指针
 */

var maxArea = function(height) {
	let pre = 0;
	let last = height.length-1;
	let res = 0;

	while(pre < last){
		// 这个判断条件很重要
		if(height[pre] < height[last]){
			res = Math.max(res, height[pre] * (last - pre))
			pre += 1
		} else {
			res = Math.max(res, height[last] * (last - pre))
			last -= 1
		}
	}

	return res;

};

var height = [1,3,2,5,25,24,5]

console.log(maxArea(height))

