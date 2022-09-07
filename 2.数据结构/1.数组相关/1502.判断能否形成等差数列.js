/*
  题目：https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/
 */

const canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const number = arr[1] - arr[0];
  for (let i = 1; i < len; i += 1) {
    if (arr[i] - arr[i - 1] !== number) return false;
  }
  return true;
};

const arr = [1, 2, 4];

console.log(canMakeArithmeticProgression(arr));
