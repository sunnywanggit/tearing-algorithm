/*
  题目：https://leetcode-cn.com/problems/reverse-words-in-a-string/
 */
const reverseWords = function (s) {
  return s.split(' ').filter((item) => item).reverse().join(' ');
};

const s = 'a good   example';

console.log(reverseWords(s));
