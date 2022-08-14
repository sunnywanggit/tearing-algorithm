/*
  题目：https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
 */

const findContinuousSequence = function (target) {
  let i = 1; // 滑动窗口的左边界
  let j = 1; // 滑动窗口的右边界
  let sum = 0; // 滑动窗口中数字的和
  const results = [];

  // 题目要求最少有两个数加和为target，所以到一半结束就可以了
  while (i <= parseInt(target / 2, 10)) {
    if (sum < target) {
      // 右边界向右移动
      sum += j;
      j += 1;
    } else if (sum > target) {
      // 左边界向右移动
      sum -= i;
      i += 1;
    } else {
      // 记录结果
      const result = [];
      for (let k = i; k < j; k += 1) {
        result.push(k);
      }
      results.push(result);
      // 左边界向右移动
      sum -= i;
      i += 1;
    }
  }
  return results;
};
