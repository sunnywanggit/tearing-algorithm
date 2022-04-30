/**
 * 题目：https://leetcode-cn.com/problems/symmetric-tree/
 */

const check = (left, right) => {
  if (!left || !right) return left === right;
  if (left.val !== right.val) return false;
  // 左右子节点需要对称相同
  return check(left.right, right.left) && check(left.left, right.right);
};

const isSymmetric = (root) => {
  if (!root) return true;
  // 检查两颗子树是否对称
  return check(root.left, root.right);
};
