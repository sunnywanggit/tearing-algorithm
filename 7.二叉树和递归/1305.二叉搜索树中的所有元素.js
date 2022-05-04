/*
  题目：https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 */

const getAllElements = function (root1, root2) {
  const root1Array = [];
  const root2Array = [];
  function getRootArray(root, result) {
    if (!root) return;
    getRootArray(root.left, result);
    result.push(root.val);
    getRootArray(root.right, result);
  }
  getRootArray(root1, root1Array);
  getRootArray(root2, root2Array);
  return [...root1Array, ...root2Array].sort((a, b) => a - b);
};
