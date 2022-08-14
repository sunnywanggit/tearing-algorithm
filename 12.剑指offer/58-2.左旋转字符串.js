/*
  题目：https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 */
const reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n).split('').join('');
};

const s = 'abcdefg';
const k = 2;

console.log(reverseLeftWords(s, k));
