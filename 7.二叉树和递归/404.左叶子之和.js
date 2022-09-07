/**
 * 题目：https://leetcode-cn.com/problems/sum-of-left-leaves/
 */

const sumOfLeftLeaves = function (root) {
  let result = 0;
  function traverse(node) {
    if (!node) return;
    if (node.left && !node.left.left && !node.left.right) result += node.left.val;
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result;
};
