/*
  题目：https://leetcode.cn/problems/search-in-a-binary-search-tree/
 */

const searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
};
