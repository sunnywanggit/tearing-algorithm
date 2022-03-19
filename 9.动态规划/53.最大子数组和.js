/**
 * 题目：https://leetcode-cn.com/problems/maximum-subarray/
 * 公司：字节
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

/**
 * 解法一：暴力解法
 */
// const maxSubArray = function (nums) {
//   const len = nums.length;
//   let max = -Infinity;
//   for (let i = 0; i < len; i += 1) {
//     let sum = 0;
//     for (let j = i; j < len; j += 1) {
//       sum += nums[j];
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// };

/**
 * @description 解法二：动态规划
 */
const maxSubArray = function (nums) {
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < len; i += 1) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;
};

console.log(maxSubArray(nums));
