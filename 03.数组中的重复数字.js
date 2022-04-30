/**
 * 题目：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

const findRepeatNumber = function (nums) {
  const set = new Set();
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
};

const nums = [2, 3, 1, 0, 2, 5, 3];

console.log(findRepeatNumber(nums));
