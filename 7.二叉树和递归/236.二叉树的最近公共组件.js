/**
 * 题目：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

// todo 这个 letcode 就是通不过，下来看一下是为什么
const find = (root, p, q) => {
  if (!root) return null;
  if (root.val === p || root.val === q) return root;
  const left = find(root.left, p, q);
  const right = find(root.right, p, q);
  if (left && right) return root;
  return left || right;
};

const lowestCommonAncestor = function (root, p, q) {
  return find(root, p, q);
};
