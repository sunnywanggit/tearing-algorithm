/*
  题目：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 */

const mirrorTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};
