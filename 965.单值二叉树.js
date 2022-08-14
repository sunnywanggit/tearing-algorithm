/*
  题目：https://leetcode.cn/problems/univalued-binary-tree/
 */
const isUnivalTree = function (root) {
  const val = root.val;
  let ans = true;
  function traverse(root) {
    if (!root) return;
    if (root.val !== val) ans = false;
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return ans;
};
