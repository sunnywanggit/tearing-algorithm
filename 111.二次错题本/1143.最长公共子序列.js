/**
 * 题目：https://leetcode-cn.com/problems/longest-common-subsequence/
 * 公司：有赞
 */
const { initArr } = require('../utils');

/**
 * @description 动态规划
 * 题解：https://leetcode-cn.com/problems/longest-common-subsequence/solution/fu-xue-ming-zhu-er-wei-dong-tai-gui-hua-r5ez6/
 * todo 这个解法并不是最优的解法，下来自己再思考一下
 */

// 备忘录
// let memo = [];

// const dp = (s1, i, s2, j) => {
//   if (i === s1.length || j === s2.length) return 0;
//   // 如果之前计算过，则直接返回备忘录中的答案
//   if (memo[i][j]) return memo[i][j];
//   // 根据 s1[i] 和 s2[j] 的情况做选择
//   if (s1[i] === s2[j]) {
//     // s1[i] 和 s2[j] 必然在 lcs 中
//     memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
//   } else {
//     // s1[i] 和 s2[j] 至少有一个不在 lcs 中
//     memo[i][j] = Math.max(
//       dp(s1, i + 1, s2, j),
//       dp(s1, i, s2, j + 1),
//     );
//   }
//   return memo[i][j];
// };

/**
 * @description 自顶向下的带备忘录的动态规划思路
 * 题解：https://mp.weixin.qq.com/s/ZhPEchewfc03xWv9VP3msg
 * todo 这道题自顶向下和自底向上我想的不是特别清楚
 */
// const longestCommonSubsequence = (text1, text2) => {
//   const M = text1.length;
//   const N = text2.length;
//   memo = initArr(M + 1, N + 1);
//   return dp(text1, 0, text2, 0);
// };

const text1 = 'abcde';
const text2 = 'ace';

console.log(longestCommonSubsequence(text1, text2));
