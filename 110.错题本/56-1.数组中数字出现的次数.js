/*
  题目：https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
 */
const singleNumbers = function (nums) {
  const set = new Set();
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    const item = nums[i];
    if (!set.has(item)) {
      set.add(item);
    } else {
      set.delete(item);
    }
  }
  for (const item of set) {
    result.push(item);
  }
  return result;
};

const nums = [4, 2, 4, 6];

console.log(singleNumbers(nums));
