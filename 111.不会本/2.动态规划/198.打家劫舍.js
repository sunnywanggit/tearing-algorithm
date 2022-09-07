/**
 * 题目：https://leetcode-cn.com/problems/house-robber/
 */

// 动态规划(自顶向下）
// const rob = function (nums) {
//   // 使用备忘录对重叠子问题进行优化
//   const memo = new Array(nums.length).fill(-1);
//
//   // 返回 nums[start..]能抢到的最大值
//   function dp(numbs, start) {
//     if (start >= numbs.length) return 0;
//     if (memo[start] !== -1) return memo[start];
//     const res = Math.max(
//       // 不强这家，去抢下家
//       dp(numbs, start + 1),
//       // 抢这家，然后继续抢下下家
//       nums[start] + dp(numbs, start + 2),
//     );
//     memo[start] = res;
//     return res;
//   }
//
//   // 强盗从第0间房子开始抢劫
//   return dp(nums, 0);
// };

// 动态规划（自底向上）
const rob = (nums) => {
  const n = nums.length;
  // dp[i] = x 表示：
  // 从第 i 间房子开始抢劫，最多能抢到的钱为 x
  // base case: dp[n] = 0
  const dp = new Array(n + 2);
  for (let i = n - 1; i >= 0; i -= 1) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
};
