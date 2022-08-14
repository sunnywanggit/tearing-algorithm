/**
 * 题目：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 */

/*
  @description 暴力解法
  时间复杂度o(n3)
 */
// const findLength = function (nums1, nums2) {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   let result = 0;
//   for (let i = 0; i < len1; i += 1) {
//     for (let j = 0; j < len2; j += 1) {
//       if (nums1[i] === nums2[j]) { // 遇到相同项
//         let subLen = 1; // 公共子序列长度至少为1
//         // eslint-disable-next-line max-len
//         while (i + subLen < len1 && j + subLen < len2 && nums1[i + subLen] === nums2[j + subLen]) { // 新的一项也相同
//           subLen += 1; // 公共子序列长度每次增加 1，考察新的一项
//         }
//         result = Math.max(subLen, result);
//       }
//     }
//   }
//   return result;
// };

const initArr = function (l1, l2) {
  const arr = []; // 声明一维数组
  for (let i = 0; i < l1; i += 1) {
    arr[i] = []; // 声明二维数组
    for (let j = 0; j < l2; j += 1) {
      arr[i][j] = 0; // 数组初始化为0
    }
  }
  return arr;
};

/*
  动态规划
 */
const findLength = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  const dp = initArr(n + 1, m + 1);
  let ans = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      } else {
        dp[i][j] = 0;
      }
      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans;
};

const nums1 = [1, 2, 3, 2, 1];
const nums2 = [3, 2, 1, 4, 7];

console.log(findLength(nums1, nums2));
