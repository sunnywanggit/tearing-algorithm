/*
  题目：https://leetcode-cn.com/problems/3sum/

  题解：https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/

  思路： 先计算两数之后，然后再计算三数之和
 */

const twoSum = (nums, start, target) => {
  nums.sort((a, b) => a - b);
  const result = [];
  const len = nums.length;
  if (!len || len < 2) return result;
  let L = start;
  let R = len - 1;
  while (L < R) {
    const sum = nums[L] + nums[R];
    const left = nums[L];
    const right = nums[R];
    if (sum > target) {
      while (L < R && nums[R] === right) R -= 1;
    } else if (sum < target) {
      while (L < R && nums[L] === left) L += 1;
    } else {
      result.push([left, right]);
      while (L < R && nums[L] === left) L += 1;
      while (L < R && nums[R] === right) R -= 1;
    }
  }
  return result;
};

const threeSum = (nums) => {
  const result = [];
  const len = nums.length;
  if (!len || len < 3) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i += 1) {
    const tuples = twoSum(nums, i + 1, 0 - nums[i]);
    for (const tuple of tuples) {
      tuple.push(nums[i]);
      result.push(tuple);
    }
    // 跳过第一个数字重复的情况,否则会出现重复的结果
    while (i < len - 1 && nums[i] === nums[i + 1]) i += 1;
  }
  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
