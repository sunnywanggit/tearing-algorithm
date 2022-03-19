/**
 * 题目：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * @description 常规解法（时间复杂度不太符合题意）
 */
// var searchRange = function(nums, target) {
// 	let L = nums.indexOf(target) || -1;
// 	let R = L;
// 	while(nums[L + 1] === target) {
// 		R = L + 1;
// 		L++
// 	}
// 	return [nums.indexOf(target), R]
// };

/**
 * @description 二分查找
 */
var searchRange = function(nums, target) {
	const len = nums.length;
	if (len === 0) return [-1,-1];

	let firstPosition = findFirstPosition(nums, target);
	if (firstPosition == -1) [-1,-1]

	let lastPosition = findLastPosition(nums, target);
	return [firstPosition, lastPosition];
};

var findFirstPosition = function(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let mid = parseInt(left + (right - left) / 2, 10);
		// 小于一定不是解
		if (nums[mid] < target) {
			// 下一轮搜索区间是 [mid + 1..right]
			left = mid + 1;
		} else {
			// nums[mid] > target，下一轮搜索区间是 [left..mid]
			right = mid;
		}
	}

	// 退出循环以后不能确定 nums[left] 是否等于 target，因此需要再判断一次
	if (nums[left] == target) {
		return left;
	}
	return -1;
}

var findLastPosition = function(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let mid = parseInt(left + (right - left + 1) / 2, 10);
		if (nums[mid] > target) {
			// 下一轮搜索区间是 [left..mid - 1]
			right = mid - 1;
		} else {
			// 下一轮搜索区间是 [mid..right]
			left = mid;
		} 
	}
	// 主程序先执行 findFirstPosition，能执行到 findLastPosition 说明数组中一定存在等于 target 的元素，因此这里不用判断 nums[left] 是否等于 target
	return left;
}


var nums = [5,7,7,8,8,10];
var target = 8

console.log(searchRange(nums, target))