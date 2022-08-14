/*
  题目：https://leetcode.cn/problems/reverse-words-in-a-string/
 */
const reverseWords = function (s) {
  return s.replace(/\s+/g, ' ').split(' ').reverse().join(' ')
    .trim();
};
