/*
  题目：https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 */

const twoSum = function (nums, target) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < target) {
      l += 1;
    } else if (sum > target) {
      r -= 1;
    } else {
      return [nums[l], nums[r]];
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
