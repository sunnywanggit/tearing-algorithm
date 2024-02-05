/*
  题目：https://leetcode-cn.com/problems/3sum/

  题解：https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/

  思路： 先计算两数之后，然后再计算三数之和
 */

let twoSumTarget = function (nums, start, target) {
  const res = [];
  nums.sort((a, b) => a - b);

  let p1 = start;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    const sum = nums[p1] + nums[p2];
    const left = nums[p1];
    const right = nums[p2];
    if (sum < target) {
      while (p1 < p2 && nums[p1] === left) p1 += 1;
    }
    if (sum > target) {
      while (p1 < p2 && nums[p2] === right) p2 -= 1;
    }
    if (sum === target) {
      res.push([nums[p1], nums[p2]]);
      while (p1 < p2 && nums[p1] === left) p1 += 1;
      while (p1 < p2 && nums[p2] === right) p2 -= 1;
    }
  }
  return res;
};

let threeSum = function (nums) {
  // 数组得排个序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  // 穷举 threeSum 的第一个数
  for (let i = 0; i < n; i += 1) {
    // 对 target - nums[i] 计算 twoSum
    let tuples = twoSumTarget(nums, i + 1, 0 - nums[i]);
    console.log('tuples', tuples);
    // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
    for (let j = 0; j < tuples.length; j += 1) {
      let tuple = tuples[j];
      tuple.push(nums[i]);
      res.push(tuple);
    }
    // 跳过第一个数字重复的情况，否则会出现重复结果
    while (i < n - 1 && nums[i] === nums[i + 1]) i += 1;
  }
  return res;
};

console.log(threeSum(nums));


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
