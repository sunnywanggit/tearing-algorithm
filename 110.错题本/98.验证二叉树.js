/*
  题目：https://leetcode.cn/problems/validate-binary-search-tree/
 */
const isValidBST = function (root) {
  function isValid(root, min, max) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
  }

  return isValid(root, null, null);
};
