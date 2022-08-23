/*
  题目：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

/*
   这种方式是肯定可以解题的，但是没有用到二叉搜索树的性质，并不是最好的解法
 */
// const lowestCommonAncestor = function (root, p, q) {
//   if (!root || root === p || root === q) return root;
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   if (left && right) return root;
//   return left || right;
// };

/*
  这里就用到了二叉搜素树的性质进行解题

  对于 BST 来说，根本不需要老老实实去遍历子树，由于 BST 左小右大的性质，
  将当前节点的值与val1和val2作对比即可判断当前节点是不是LCA：

  假设val1 < val2，
  那么val1 <= root.val <= val2则说明当前节点就是LCA；
  若root.val比val1还小，则需要去值更大的右子树寻找LCA；
  若root.val比val2还大，则需要去值更小的左子树寻找LCA。
 */
const lowestCommonAncestor = function (root, p, q) {
  function find(root, val1, val2) {
    if (!root) return null;
    if (val1 > root.val) return find(root.right, val1, val2);
    if (val2 < root.val) return find(root.left, val1, val2);
    // val1 <= root.val <= val2
    return root;
  }
  const val1 = Math.min(p.val, q.val);
  const val2 = Math.max(p.val, q.val);
  return find(root, val1, val2);
};
