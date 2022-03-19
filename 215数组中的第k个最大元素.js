/**
 * 题目：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
const findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

console.log(findKthLargest(nums, k));
