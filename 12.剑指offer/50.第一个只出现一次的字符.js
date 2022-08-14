/*
  题目：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */

const firstUniqChar = function (s) {
  const map = new Map();
  const len = s.length;
  for (let i = 0; i < len; i += 1) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }
  return ' ';
};

const s = '';

console.log(firstUniqChar(s));
