/**
 * @description https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * @param root
 */
let res = 0;
let path = '';

const traverse = (root) => {
  if (!root) return;
  // 前序位置，记录节点值
  path = `${path}${root.val}`;
  if (!root.left && !root.right) {
    res += parseInt(path, 10);
  }
  // 二叉树递归框架，遍历左右子树
  traverse(root.left);
  traverse(root.right);
  // 后序位置，撤销节点的值
  path = path.slice(0, path.length - 1);
};

const sumNumbers = function (root) {
  res = 0;
  path = '';
  traverse(root);
  return res;
};
