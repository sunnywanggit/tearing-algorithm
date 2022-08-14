/*
  题目：https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */

const letterCombinations = function (digits) {
  const result = [];
  if (!digits.length) return result;
  const track = [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const chars = [];
  for (const num of digits) {
    chars.push(map[num].split(''));
  }

  function dp(chars, index) {
    if (track.length === chars.length) {
      result.push([...track].join(''));
      return;
    }
    if (index >= chars.length) return;
    for (let i = 0; i < chars[index].length; i += 1) {
      track.push(chars[index][i]);
      dp(chars, index + 1);
      track.pop();
    }
  }
  dp(chars, 0);

  return result;
};

const digits = '234';

console.log(letterCombinations(digits));
