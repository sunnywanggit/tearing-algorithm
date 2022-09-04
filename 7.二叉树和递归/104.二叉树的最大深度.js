/**
 * 题目：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * @description 深度优先搜索
 */
const maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left || !root.right) return maxDepth(root.left || root.right) + 1;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


const maxDepth = function (root) {
	 if (!root) return 0;
	 // 计算左右子树的最大深度
  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);
  // 整棵树的深度等于左右子树深度的最大值+根节点自己
	 return Math.max(leftMax, rightMax) + 1;
};

const tree = [3, 9, 20, null, null, 15, 7];
