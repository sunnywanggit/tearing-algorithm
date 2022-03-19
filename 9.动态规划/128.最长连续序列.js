/**
 * 题目：https://leetcode-cn.com/problems/longest-consecutive-sequence/
 */

/**
 * @description 自己想出来的比较笨拙的解法
 */
// const longestConsecutive = function (nums) {
//   let result = 0;
//   const len = nums.length;
//   if (!len) return result;
//   if (len === 1) return 1;
//   nums = [...new Set(nums)].sort((a, b) => a - b);
//   let L = 0;
//   let R = 1;
//   let temp = 1;
//   while (R < len) {
//     if (nums[R] - nums[L] === 1) {
//       temp += 1;
//     } else {
//       temp = 1;
//     }
//     L += 1;
//     R += 1;
//     result = Math.max(result, temp);
//   }
//   return result;
// };

/**
 * @description 动态规划
 * 参考题解：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/dong-tai-gui-hua-python-ti-jie-by-jalan/
 * todo 这个题解看的我着实是有点懵逼
 */
const longestConsecutive = (nums) => {
  let res = 0;
  const dict = new Map();
  nums.forEach((item) => {
    if (!dict.has(item)) {
      let left = dict.get(item - 1);
      if (left === undefined) left = 0;

      let right = dict.get(item + 1);
      if (right === undefined) right = 0;

      dict.set(item, 1);
      const length = left + 1 + right;
      res = Math.max(res, length);
      dict.set(item - left, length);
      dict.set(item + right, length);
    }
  });
  return res;
};
const nums = [1, 2, 0, 1];

console.log(longestConsecutive(nums));
