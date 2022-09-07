/*
  题目：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 */

// 自上而下递归的解决问题
// const memo = [];
// const fib = function (n) {
//   if (n === 0 || n ===1 ) return n;
//   if (!memo[n]) {
//     memo[n] = fib(n - 1) + fib(n - 2);
//   }
//   return memo[n] % 1000000007;
// };

// 动态规划，自下而上的解决问题
// todo 思考一下，为什么动态规划解决这个问题测试用例就是跑不过呢？
const fib = function (n) {
  // base case
  if (n === 0 || n === 1) return n;
  // 地推关系
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i += 1) {
    const sum = prev + curr;
    console.log('sum', sum);
    prev = curr;
    curr = sum;
  }
  return curr % 1000000007;
};

console.log(fib(81));
