/**
 * 题目：https://leetcode-cn.com/problems/house-robber/
 */

const nums = [1, 2, 3, 1];

// let memo;

// 考虑抢劫 nums[index...nums.length) 这个范围内所有的房子
// const tryRob = (nums, index) => {
//   if (index >= nums.length) return 0;
//   let res = 0;
//   if (memo[index]) return memo[index];
//   for (let i = index; i < nums.length; i += 1) {
//     res = Math.max(res, nums[i] + tryRob(nums, i + 2));
//   }
//   memo[index] = res;
//   return res;
// };

/**
 * @description 递归（自顶向下）
 * 题解： 《玩转算法面试9-4》
 */
// const rob = function (nums) {
//   memo = [];
//   return tryRob(nums, 0);
// };

// const dp = () => {
//
// };

/**
 * @description 动态规划（自底向上）
 * 题解： 《玩转算法面试9-4》
 */
const rob = function (nums) {
  return tryRob(nums, 0);
};

console.log(rob(nums));
