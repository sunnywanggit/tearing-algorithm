/**
 * 题目： 如果把根节点看做第 1 层，如何打印出每一个节点所在的层数？
 * 题目：https://labuladong.gitee.io/algo/2/19/22/
 */

const traverse = (root, level) => {
  if (!root) return;
  console.log(`当前节点在第${level}层`);
  traverse(root.left, level + 1);
  traverse(root.right, level + 1);
};

traverse(root, 1);
