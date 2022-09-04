/*
  题目：https://leetcode.cn/problems/binary-tree-right-side-view/
*/

const rightSideView = function (root) {
  function find(root, result) {
    if (!root) return;
    result.push(root.val);
    if (!root.left && !root.right) return;
    if (root.right) {
      find(root.right, result);
    } else if (root.left) find(root.left, result);
  }
  if (!root) return [];
  const rightResult = [];
  const leftResult = [];
  find(root.right, rightResult);
  find(root.left, leftResult);
};
