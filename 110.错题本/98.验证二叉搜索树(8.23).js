/*
  题目：https://leetcode.cn/problems/validate-binary-search-tree/
 */

const isValidBST = function (root) {
  /* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
  function isValid(root, min, max) {
    // base case
    if (!root) return true;
    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (min != null && root.val <= min.val) return false;
    if (max != null && root.val >= max.val) return false;
    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return isValid(root.left, min, root)
        && isValid(root.right, root, max);
  }
  return isValid(root, null, null);
};
