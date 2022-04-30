/*
  题目：https://leetcode-cn.com/problems/number-of-1-bits/
 */
// todo 这道题很奇怪啊，看着逻辑都没问题，但是就是通不过测试用例，妈的
// const hammingWeight = function (n) {
//   const len = n.length;
//   let res = 0;
//   for (let i = 0; i < len; i += 1) {
//     if (n[i] === '1') res += 1;
//   }
//   return res;
// };

const hammingWeight = (n) => {
  let res = 0;
  while (n) {
    n &= (n - 1);
    res += 1;
  }
  return res;
};
