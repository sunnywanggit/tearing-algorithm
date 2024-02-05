/*
  题目：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/

const lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};
