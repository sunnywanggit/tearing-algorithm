/**
 * 题目：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * @description 深度优先搜索
 */
// const minDepth = function (root) {
//   if (root == null) return 0;
//   // 这道题递归条件里分为三种情况
//   // 1.左孩子和右孩子都为空的情况，说明到达了叶子节点，直接返回1即可
//   if (root.left == null && root.right == null) return 1;
//   // 2.如果左孩子和右孩子其中一个为空，那么需要返回比较大的那个孩子的深度
//   const m1 = minDepth(root.left);
//   const m2 = minDepth(root.right);
//   // 这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回m1 + m2 + 1;
//   if (root.left == null || root.right == null) return m1 + m2 + 1;
//
//   // 3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
//   return Math.min(m1, m2) + 1;
// };

/**
 * @description 广度优先搜索
 */
const minDepth = (root) => {
  if (!root) return 0;
  const queue = [root];
  // root 本身就是一层,depth 初始化为1
  let depth = 1;
  while (queue.length) {
    const len = queue.length;
    // 将当前队列的所有节点向四周扩散
    for (let i = 0; i < len; i += 1) {
      const current = queue.pop();
      // 判断是否到达了终点
      if (!current.left && !current.right) {
        return depth;
      }
      // 将 current 的相邻节点加入队列
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    // 这里增加步数
    depth += 1;
  }
  return depth;
};
