/*
  题目：https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 */

const reverseWords = function (s) {
  return s.replace(/\s+/g, ' ').split(' ').reverse().join(' ')
    .trim();
};
