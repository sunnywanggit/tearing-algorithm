/*
  题目：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/

  解题思路：
    首先二叉搜索树的 左子树 < 根节点 < 右子树
    然后从后续遍历的结果可知，数组中的最后一个节点一定是根节点
    数组从前往后遍历，第一个大于根节点的节点一直到末尾一定是右子树,之前的一定要左子树
    这个时候我们就可以借助 左子树 < 根节点 < 右子树 这个特点然后利用递归来解题了
 */

const verifyPostorder = function (postorder) {
  const check = (postorder) => {
    const len = postorder.length;
    const root = postorder[len - 1];
    let left = [];
    let right = [];
    let i = 0;
    while (postorder[i] < root) i += 1;
    left = postorder.slice(0, i);
    right = postorder.slice(i, len - 1);
    for (let i = 0; i < left.length; i += 1) {
      if (left[i] > root) return false;
    }
    for (let i = 0; i < right.length; i += 1) {
      if (right[i] < root) return false;
    }
    if (left.length && !check(left)) return false;
    if (right.length && !check(right)) return false;
    return true;
  };
  if (!postorder.length) return true;
  return check(postorder);
};

const postorder = [4, 8, 6, 12, 16, 14, 10];

console.log(verifyPostorder(postorder));
