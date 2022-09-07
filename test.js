const rob = (nums) => {
  const n = nums.length;
  const dp = Array(nums.length + 2).fill(0);
  for (let i = n - 1; i >= 0; i -= 1) {
    dp[i] = Math.max(dp[i], nums[i] + dp[i - 2]);
  }
  return dp[0];
};
