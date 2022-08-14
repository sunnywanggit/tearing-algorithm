/*
  题目：https://leetcode.cn/problems/valid-anagram/
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const s1 = [...s].sort().join('');
  const t1 = [...t].sort().join('');
  return s1 === t1;
};

const s = 'rat';
const t = 'car';

console.log(isAnagram(s, t));
