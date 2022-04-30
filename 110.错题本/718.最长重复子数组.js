/**
 * 题目：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 */

// todo

/**
 * @description 暴力解法
 * 时间复杂度o(n3)
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

const maxLen = (num1, index1, num2, index2, len) => {
  let result = 0;
  let countNum = 0;
  for (let i = 0; i < len; i += 1) {
    if (num1[index1 + i] === num2[index2 + i]) {
      countNum += 1;
    } else if (countNum > 0) {
      result = Math.max(result, countNum);
      countNum = 0;
    }
  }
  return result;
};

const helper = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let result = 0;
  // 进入时候的处理
  for (let len = 1; len < len1; len += 1) {
    const tempLen = maxLen(nums1, 0, nums2, len2 - len, len);
    result = Math.max(result, tempLen);
  }
  // 中间过程的处理
  for (let index2 = len2; index2 - len1 >= 0; index2 -= 1) {
    const tempLen = maxLen(nums1, 0, nums2, index2 - len1, len1);
    result = Math.max(result, tempLen);
  }
  // 出去时的处理
  for (let len = len1; len > 0; len -= 1) {
    const tempLen = maxLen(nums1, len1 - len, nums2, len);
    result = Math.max(result, tempLen);
  }
};

/**
 * @description 双指针解法
 */
const findLength = function (nums1, nums2) {
  return nums1.length < nums2.length ? helper(nums1, nums2) : helper(nums2, nums1);
};

const nums1 = [1, 2, 3, 2, 1];
const nums2 = [3, 2, 1, 4, 7];

console.log(findLength(nums1, nums2));
