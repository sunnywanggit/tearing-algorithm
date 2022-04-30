/**
 * 题目：https://leetcode-cn.com/problems/second-largest-digit-in-a-string/
 */

/**
 * @description 我想到的笨办法，肯定不是最优解
 */
// const secondHighest = function (s) {
//   const set = new Set();
//   for (let i = 0; i < s.length; i += 1) {
//     // eslint-disable-next-line no-restricted-globals
//     if (!isNaN(parseInt(s[i], 10))) set.add(s[i]);
//   }
//   const result = [...set].sort();
//   return result.length - 2 >= 0 ? result[result.length - 2] : -1;
// };

/**
 * @description 我又思考了一下，双指针可能是一个不错的解法
 */
const secondHighest = function (s) {
  const slow = 0;
  const fast = 1;
  while (fast < s.length) {
    min = Math.min(s[slow], s[fast]);
  }
};

const s = 'dfa12321afd';

console.log(Math.max('2', '1'));
