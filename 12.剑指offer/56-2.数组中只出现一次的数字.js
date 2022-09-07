/*
  题目：https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
 */

const singleNumber = function (nums) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const item = nums[i];
    if (map.has(item)) {
      const count = map.has(item) + 1;
      map.set(item, count);
    } else {
      map.set(item, 1);
    }
  }
  for (const pair of map.entries()) {
    if (pair[1] === 1) return pair[0];
  }
};

const nums = [3, 4, 3, 3];

console.log(singleNumber(nums));
