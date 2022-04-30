/**
 * 题目：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 */

let result = -Infinity;

/**
 * 题解：https://labuladong.gitee.io/algo/1/2/
 */
const maxPathSum = function (root) {
  if (!root) return 0;
  const left = Math.max(0, maxPathSum(root.left));
  const right = Math.max(0, maxPathSum(root.right));
  // 后序遍历代码位置
  result = Math.max(result, left + right + root.val);
  return Math.max(left, right) + root.val;
};
