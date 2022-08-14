/*
  题目：https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/
 */

const missingNumber = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0] ? 0 : 1;
  for (let i = 0; i < len; i += 1) {
    if (i !== nums[i]) return i;
  }
  return nums[len - 1] + 1;
};

const nums = [0, 1, 2];

console.log(missingNumber(nums));
