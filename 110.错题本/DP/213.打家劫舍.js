/*
  题目：https://leetcode.cn/problems/house-robber-ii/
 */

/*
  也是使用动态规划的方式来解题，这道题相比于 198 题多了一些限制条件
  本质上也就是偷盗的方式发生了如下变化：
  1. 不抢首尾
  2. 抢首不抢尾
  3. 抢尾不抢首
  但是 2 3 情况的抢劫结果肯定大于第一种情况，所以只需要考虑 2 3两种情况即可。
 */
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
