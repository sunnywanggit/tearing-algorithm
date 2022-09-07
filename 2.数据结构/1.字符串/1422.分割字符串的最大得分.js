/*
  题目：https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 */

const maxScore = function (s) {
  let leftSum = s.slice(0, 1).split('').filter((item) => item === '0').length;
  let rightSum = s.slice(1, s.length).split('').filter((item) => item === '1').length;
  let maxScore = leftSum + rightSum;

  for (let i = 2; i < s.length; i += 1) {
    if (s[i - 1] === '0') leftSum += 1;
    if (s[i - 1] === '1') rightSum -= 1;
    if (leftSum + rightSum > maxScore) {
      maxScore = leftSum + rightSum;
    }
  }
  return maxScore;
};

const s = '00111';

console.log(maxScore(s));
