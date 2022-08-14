/*
  题目：https://leetcode.cn/problems/implement-strstr/
 */

// 暴力解法
const strStr = function (txt, pat) {
  const M = pat.length;
  const N = txt.length;
  for (let i = 0; i <= N - M; i += 1) {
    let j;
    for (j = 0; j < M; j += 1) {
      if (pat[j] !== txt[i + j]) break;
    }
    // pat 全都匹配了
    if (j === M) return i;
  }
  // txt 中不存在 pat 子串
  return -1;
};

const haystack = 'heol';
const needle = 'l';

console.log(strStr(haystack, needle));
