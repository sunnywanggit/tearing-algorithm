/**
 * 题目：https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * @description 采用从后往前的方法来解决这个问题，注意 lm < 0 时的处理方式
 */
const merge = function (ms, m, ns, n) {
  let lm = m - 1;
  let ln = n - 1;
  let i = ms.length - 1;
  while (ln >= 0) {
    if (lm < 0) {
      while (ln >= 0) {
        ms[i] = ns[ln];
        ln -= 1;
        i -= 1;
      }
      continue;
    }
    if (ns[ln] >= ms[lm]) {
      ms[i] = ns[ln];
      ln -= 1;
    } else {
      ms[i] = ms[lm];
      lm -= 1;
    }
    i -= 1;
  }
  return ms;
};

const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

console.log(merge(nums1, m, nums2, n));
