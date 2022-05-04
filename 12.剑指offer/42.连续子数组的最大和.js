/*
  题目：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 */

const maxSubArray = function (nums) {
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  let result = dp[0];

  for (let i = 1; i < len; i += 1) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(dp[i], result);
  }

  return result;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
