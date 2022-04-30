/**
 * 题目：https://leetcode-cn.com/problems/compare-version-numbers/
 */
// 普通解法
const compareVersion = function (version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i += 1) {
    const v1 = parseFloat(arr1[i]) || 0;
    const v2 = parseFloat(arr2[i]) || 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }
  return 0;
};
