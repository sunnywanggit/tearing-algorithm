/*
  题目：https://leetcode.cn/problems/balanced-binary-tree/
 */

const isBalanced = function (root) {
  if (!root) return true;
  function depth(root) {
    return !root ? 0 : Math.max(depth(root.left), depth(root.right)) + 1;
  }
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
