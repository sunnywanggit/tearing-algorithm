/**
 * 题目：https://leetcode-cn.com/problems/subarray-sum-equals-k/
 */

/**
 * @description 把所有子数组都穷举出来，算它们的和，看看谁的和等于 k 不就行了，借助前缀和技巧很容易写出一个解法
 * 这个解法的时间复杂度 O(N^2) 空间复杂度 O(N)，并不是最优的解法。
 * 不过通过这个解法理解了前缀和数组的工作原理之后，可以使用一些巧妙的办法把时间复杂度进一步降低。
 *
 * 题解：https://labuladong.gitee.io/algo/2/19/22/
 */
// const subarraySum = function (nums, k) {
//   // 构造前缀和
//   const preSum = [0];
//   for (let i = 0; i < nums.length + 1; i += 1) {
//     preSum[i + 1] = preSum[i] + nums[i];
//   }
//   let res = 0;
//   // 穷举所有子数组
//   // 计算，有几个 j 能够使得 preSum[i] 和 preSum[j] 的差为 k。毎找到一个这样的 j，就把结果加一。
//   for (let i = 1; i <= nums.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//       // 子数组 nums[j..i-1]的元素和
//       if (preSum[i] - k === preSum[j]) res += 1;
//     }
//   }
//   return res;
// };

/*
  优化的思路是：我直接记录下有几个 preSum[j] 和 preSum[i] - k 相等，直接更新结果，
  就避免了内层的 for 循环。我们可以用哈希表，在记录前缀和的同时记录该前缀和出现的次数。

   todo 这个下来可以自己思考一下
 */

const nums = [1, 2, 3];
const k = 3;

console.log(subarraySum(nums, k));
