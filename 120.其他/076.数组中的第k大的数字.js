/**
 * 题目：https://leetcode-cn.com/problems/xx4gT2/
 */

const findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;

console.log(findKthLargest(nums, k));
