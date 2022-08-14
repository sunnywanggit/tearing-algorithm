/*
  题目：https://leetcode.cn/problems/product-of-array-except-self/
 */

// 暴力解法：时间超出了限制
// const productExceptSelf = function (nums) {
//   const result = [];
//   const len = nums.length;
//   for (let i = 0; i < len; i += 1) {
//     result[i] = nums.filter((value, index) => index !== i).reduce((pre, cur) => pre * cur);
//   }
//   return result;
// };

// 乘积 = 当前数左边的乘积 * 当前数右边的乘积

const productExceptSelf = function (nums) {
  const len = nums.length;
  const res = Array(len);
  let k = 1;
  for (let i = 0; i < len; i += 1) {
    res[i] = k;
    k *= nums[i];
  }
  k = 1;
  for (let i = len - 1; i >= 0; i -= 1) {
    res[i] *= k;
    k *= nums[i];
  }
  return res;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
