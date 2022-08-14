/*
  题目：https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 */

// 我的解法，超出时间限制
// const myPow = function (x, n) {
//   let res = 1;
//   if (n > 0) {
//     for (let i = 0; i < n; i += 1) {
//       res *= x;
//     }
//     return res;
//   }
//   for (let i = 0; i < Math.abs(n); i += 1) {
//     res *= x;
//   }
//   return 1 / res;
// };

// 题解：https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/javascriptjie-jue-wen-ti-yi-wei-yun-suan-h4u9/
const myPow = function (x, n) {
  function quickMul(x, N) {
    if (N === 0) return 1.0;
    const y = quickMul(x, parseInt(N / 2, 10));
    return N % 2 === 0 ? y * y : y * y * x;
  }

  return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, n);
};

const x = 2;
const n = 2;

console.log(myPow(x, n));
