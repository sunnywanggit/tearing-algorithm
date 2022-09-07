/*
  题目：https://leetcode.cn/problems/word-break/
 */

function wordBreak(s, wordDict) {
  const n = s.length;
  const wordDictSet = new Set(wordDict);
  console.log(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}

const s = 'bb';

const wordDict = ['a', 'b', 'bbb', 'bbbb'];

console.log(wordBreak(s, wordDict));
