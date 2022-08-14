/*
  题目：https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 */

/*
  注意：这个函数是没有返回值的
 */
const flatten = function (root) {
  if (!root) return;

  // 利用定义，把左右子树拉平
  flatten(root.left);
  flatten(root.right);

  /** ** 后序遍历位置 *** */
  // 1、左右子树已经被拉平成一条链表
  const left = root.left;
  const right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = right;
};
