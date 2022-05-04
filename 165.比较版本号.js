/**
 * 题目：https://leetcode-cn.com/problems/compare-version-numbers/
 */
// 普通解法
const compare = function (version1, version2) {
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

// 使得下面的返回正确
console.log(compare('1.2.2.2.2', '1.3.55'));// -1
console.log(compare('1.2', '1.2.55'));// -1
console.log(compare('1.2.2', '1.2.2')); // 0
console.log(compare('1.3.2', '1.2.2')); // 1
console.log(compare('1.20.2', '1.3.20')); // 1
console.log(compare('1.0.1.0', '1.0.1')); // 0
