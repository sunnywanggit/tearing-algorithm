/*
  题目：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */

const check = (left, right) => {
  if (!left || !right) return left === right;
  if (left.val !== right.val) return false;
  return check(left.left, right.right) && check(left.right, right.left);
};
const isSymmetric = function (root) {
  if (!root) return true;
  return check(root.left, root.right);
};
