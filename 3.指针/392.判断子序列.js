/*
  题目：https://leetcode-cn.com/problems/is-subsequence/
 */

const isSubsequence = function (s, t) {
  let l1 = 0;
  let l2 = 0;
  const len1 = s.length;
  const len2 = t.length;
  while (l2 < len2) {
    if (t[l2] === s[l1]) {
      l1 += 1;
      l2 += 1;
    } else {
      l2 += 1;
    }
  }
  return l1 === len1;
};
const s = 'axc';
const t = 'ahbgdc';

console.log(isSubsequence(s, t));
