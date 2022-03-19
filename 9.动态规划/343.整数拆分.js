/**
 * 题目：https://leetcode-cn.com/problems/integer-break/
 */

const n = 10;
// 将 n 进行分割（至少分割两部分），可以获得的最大乘积
var recursion = function (n) {
  if (n === 1) return 1;
  let result = -1;
  for (let i = 1; i <= n - 1; i++) {
    result = Math.max(result, i * (n - i), i * recursion(n - i));
  }
  return result;
};

/**
 * 解法一：暴力递归，到31的时候直接超时
 */
const integerBreak1 = function (n) {
  return recursion(n);
};

// ================================

const memo1 = [];

var search = function (n) {
  if (n === 1) return 1;
  if (memo1[n]) return memo1[n];
  let result = -1;
  for (let i = 1; i <= n - 1; i++) {
    result = Math.max(result, i * (n - i), i * search(n - i));
    memo1[n] = result;
  }
  return result;
};

/**
 * 解法二：记忆化搜索
 */
const integerBreak2 = function (n) {
  return search(n);
};

// ================================
// memo2[i] 表示将数字i分割（至少分割成2分）后得到的最大乘积
const memo2 = [];

const dfs = function (n) {
  memo2[1] = 1;
  memo2[2] = 1;

  for (let i = 3; i <= n; i++) {
    // 求解 memo2[i]
    for (let j = 1; j <= i - 1; j++) {
      memo2[i] = Math.max(memo2[i], j * (i - j), j * memo2[i - j]);
    }
  }

  return memo2[n];
};

/**
 * 解法：动态规划
 */
const integerBreak3 = function (n) {
  return dfs(n);
};

console.log(integerBreak3(n));
