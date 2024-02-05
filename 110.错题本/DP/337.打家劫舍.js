/*
  题目：https://leetcode.cn/problems/house-robber-iii/
 */

const rob = (root) => {
  const memo = new Map();
  function dp(root) {
    if (!root) return 0;
    if (memo.has(root)) return memo.get(root);
    // 抢，去抢下下家
    const doRob = root.val + (!root.left ? 0 : dp(root.left.left) + dp(root.left.right)) + (!root.right ? 0 : dp(root.right.left) + dp(root.right.right));
    // 不抢，抢下家
    const notRob = dp(root.left) + dp(root.right);
    const res = Math.max(doRob, notRob);
    memo.set(root, res);
    return res;
  }
  return dp(root);
};
