/**
 * 题目：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

// todo 这个为什么不行呢，看着也没什么毛病啊
/**
 * @description 广度优先搜索
 * 题解：https://labuladong.gitee.io/algo/4/30/115/
 */
const levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [];
  queue.push(root);
  // while 循环控制从上到下一层一层遍历
  while (queue.length) {
    const len = queue.length;
    // 记录这一层节点的值
    const level = [];
    // for 循环控制每一层从左往右遍历
    for (let i = 0; i < len; i += 1) {
      const current = queue.pop();
      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(level);
  }
  return result;
};
