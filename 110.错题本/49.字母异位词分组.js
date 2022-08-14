/*
  题目：https://leetcode.cn/problems/group-anagrams/
 */

const groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const key = [...str].sort().join('');
    // eslint-disable-next-line no-unused-expressions
    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
  }
  return [...map.values()];
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
// const str = 'cba';
// console.log([...str].sort().join(''));
