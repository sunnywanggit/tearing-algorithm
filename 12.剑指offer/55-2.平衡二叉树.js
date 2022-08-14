/*
  题目：https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/
 */

const isBalanced = function (root) {
  if (!root) return true;

  function maxDepth(root) {
    if (!root) return 0;
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
