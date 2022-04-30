/**
 * 题目：https://leetcode-cn.com/problems/coin-change/
 */

/**
 * @description 暴力递归解法
 * 状态：目标金额 amount
 * 选择：coins 数组中列出的所有硬币面额
 * 函数的定义：凑出金额 amount，至少需要 coinChange(coins,amount) 枚硬币
 * base case
 * amount === 0 时，需要 0 枚硬币
 * amount < 0 时，不可能凑出，返回-1
 *
 */
const coinChange = function (coins, amount) {
  // base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let res = Infinity;
  for (let i = 0; i < coins.length; i += 1) {
    // 计算子问题的结果
    const subProblem = coinChange(coins, amount - coins[i]);
    // 子问题无解则跳过
    if (subProblem === -1) continue;
    // 在子问题中选择最优解然后加1
    res = Math.min(res, subProblem + 1);
  }
  return res === Infinity ? -1 : res;
};

const coins = [4];
const amount = 3;

console.log(coinChange(coins, amount));
