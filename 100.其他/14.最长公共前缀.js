/**
 * 题目：https://leetcode-cn.com/problems/longest-common-prefix/
 */

const strs = ['flower', 'flow', 'flight'];

/**
 * @description 暴力解法
 * @param {Array} strs 字符串数组
 */
// const longestCommonPrefix = function (strs) {
//   let result = '';
//   const len = strs.length;
//   if (!len) return result;
//   for (let i = 0; i < strs[0].length; i += 1) {
//     for (let j = 1; j < len; j += 1) {
//       if (strs[j][i] !== strs[0][i]) return result;
//     }
//     result += strs[0][i];
//   }
//
//   return result;
// };

const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let res = strs[0];
  for (char of strs) {
    for (let i = 0; i < res.length; i += 1) {
      if (char[i] !== res[i]) {
        res = res.slice(0, i);
        break;
      }
    }
  }
  return res;
};

console.log(longestCommonPrefix(strs));
