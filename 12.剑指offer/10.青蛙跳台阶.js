/*
  题目：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 */

// 递归 + 记忆化
// const memo = [];
// const numWays = function (n) {
//   memo[0] = 1;
//   memo[1] = 1;
//   memo[2] = 2;
//   if (!memo[n]) {
//     memo[n] = numWays(n - 2) + numWays(n - 1);
//   }
//   return memo[n] % 1000000007;
// };

// 动态规划
const numWays = (n) => {
  const memo = [];
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n] % 1000000007;
};
