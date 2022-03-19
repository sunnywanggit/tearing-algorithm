/**
 * 题目：https://leetcode-cn.com/problems/climbing-stairs/
 */

// 动态规划
const climbStairs1 = (n) => {
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

// const memo = [];
// 递归+记忆化搜索
// var climbStairs2 = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//
//   if (!memo[n]) {
//     memo[n] = climbStairs2[n - 1] + climbStairs2[n - 2];
//   }
//
//   return memo[n];
// };

console.log(climbStairs2(3));
