/*
  题目：https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 */

const largestValues = function (root) {
  const result = [];
  if (!root) return [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    let max = -Infinity;
    for (let i = 0; i < len; i += 1) {
      const current = queue.shift();
      max = Math.max(max, current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(max);
  }
  return result;
};
