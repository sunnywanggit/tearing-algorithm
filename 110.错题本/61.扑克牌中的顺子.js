/*
  题目：https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/submissions/
 */

const isStraight = function (nums) {
  let zero = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < 5; i += 1) {
    if (nums[i] === 0) {
      zero += 1; // 统计大小王数量
    } else if (nums[i] === nums[i + 1]) {
      return false;
    } // 若有重复，提前返回 false
  }
  return nums[4] - nums[zero] < 5; // 最大牌 - 最小牌 < 5 则可构成顺子
};
