/**
 * @description https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * @param root
 */

/*
  主要的思路：递归 + 回溯
 */
const sumNumbers = function (root) {
  let res = 0;
  let path = '';

  function traverse(root) {
    if (!root) return;
    // 前序位置，记录节点值
    path = `${path}${root.val}`;
    if (!root.left && !root.right) {
      res += parseInt(path, 10);
    }
    // 二叉树递归遍历框架，递归遍历左右子树
    traverse(root.left);
    traverse(root.right);
    // 后续位置，撤销节点值
    path = path.slice(0, path.length - 1);
  }

  traverse(root);
  return res;
};
