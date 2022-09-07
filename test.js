const rob = function (nums) {
  function robRange(nums, start, end) {
    const memo = Array(nums.length).fill(-1);
    function dp(nums, start) {
      if (start > end) return 0;
      if (memo[start] !== -1) return memo[start];
      const res = Math.max(
        dp(nums, start + 1, end),
        nums[start] + dp(nums, start + 2, end),
      );
      memo[start] = res;
      return res;
    }
    return dp(nums, start);
  }
  const len = nums.length;
  if (len === 1) return nums[0];
  return Math.max(robRange(nums, 1, len - 1), robRange(nums, 0, len - 2));
};
