/*
  题目：https://leetcode.cn/problems/jian-sheng-zi-lcof/
 */

// 题解：https://leetcode.cn/problems/jian-sheng-zi-lcof/solution/jian-zhi-offer-by-leetcode_xsong-yrqo/
const cuttingRope = function (n) {
  const dp = [];
  dp[2] = 1;
  for (let i = 3; i < n + 1; i += 1) {
    for (let j = 1; j < i; j += 1) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
};

const n = 5;

console.log(cuttingRope(n));
