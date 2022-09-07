/**
 * 题目：https://leetcode-cn.com/problems/house-robber/
 */

<<<<<<< HEAD:9.动态规划/198.打家劫舍.js
// 动态规划(自顶向下）
=======
const nums = [1, 2, 3, 1];

/**
 * @description 递归（自顶向下）
 * 题解： 《玩转算法面试9-4》
 */
>>>>>>> b057795f4aad946427759ffe05a625b139ee4b09:111.不会本/198.打家劫舍.js
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

<<<<<<< HEAD:9.动态规划/198.打家劫舍.js
// 动态规划（自底向上）
const rob = (nums) => {
=======
/**
 * @description 动态规划（自底向上）
 * 题解： 《玩转算法面试9-4》
 */
const rob = function (nums) {
  const memo = [];

  // 考虑抢劫 nums[index...nums.length) 这个范围内所有的房子
  const tryRob = (nums, index) => {
    if (index >= nums.length) return 0;
    let res = 0;
    if (memo[index]) return memo[index];
    for (let i = index; i < nums.length; i += 1) {
      res = Math.max(res, nums[i] + tryRob(nums, i + 2));
    }
    memo[index] = res;
    return res;
  };

  return tryRob(nums, 0);
};
>>>>>>> b057795f4aad946427759ffe05a625b139ee4b09:111.不会本/198.打家劫舍.js

};
