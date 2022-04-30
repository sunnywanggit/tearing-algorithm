/*
  题目：https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
 */

const searchBST = function (root, val) {
  // 前序位置做处理
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
};
