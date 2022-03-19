/**
 *
 题目： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/ （

 思路：
 这题是比较典型的滑动窗口问题，定义一个左边界 left 和一个右边界 right，形成一个窗口，并且在这个窗口中保证不出现重复的字符串。
 这需要用到一个新的变量 freqMap，用来记录窗口中的字母出现的频率数。
 在此基础上，先尝试取窗口的右边界再右边一个位置的值，也就是 str[right + 1]，然后拿这个值去 freqMap 中查找：

 1.这个值没有出现过，那就直接把 right ++，扩大窗口右边界。
 2.如果这个值出现过，那么把 left ++，缩进左边界，并且记得把 str[left] 位置的值在 freqMap 中减掉。

 循环条件是 left < str.length，允许左边界一直滑动到字符串的右界。
 公司： 字节
 */

/**
 * @description 寻找无重复字符的最长子串
 * @param {string} str 被查找的字符串
 */

const s = 'abcabcbb';

const lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let L = 0;
  let R = -1;
  const record = {};
  let max = 0;
  while (L < len) {
    const nextLetter = s[R + 1];
    if (nextLetter && !record[nextLetter]) {
      record[nextLetter] = 1;
      R += 1;
    } else {
      record[s[L]] = 0;
      L += 1;
    }
    max = Math.max(max, R - L + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring(s));
