/**
 * 题目：
 */
const maxProduct = function (nums) {
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < len; i += 1) {
    dp[i] = Math.max(dp[i - 1] * nums[i], nums[i]);
    result = Math.max(dp[i], result);
  }
  return result;
};
