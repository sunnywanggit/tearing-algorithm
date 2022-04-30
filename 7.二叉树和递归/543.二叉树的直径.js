/**
 * 题目：https://leetcode-cn.com/problems/diameter-of-binary-tree/
 */

/**
 * 注意：解决这道题的关键在于，你要知道每一条二叉树的【直径】的长度，就是一个节点的左右子树的最大深度之和
 */
// let maxDiameter = 0;
//
// // 计算二叉树的最大深度
// function maxDepth(root) {
//   if (!root) return 0;
//   const leftMax = maxDepth(root.left);
//   const rightMax = maxDepth(root.right);
//   return 1 + Math.max(leftMax, rightMax);
// }
//
// // 遍历二叉树
// function traverse(root) {
//   if (!root) return;
//   // 对每个节点计算直径
//   const leftMax = maxDepth(root.left);
//   const rightMax = maxDepth(root.right);
//   const myDiameter = leftMax + rightMax;
//   // 更新全局最大直径
//   maxDiameter = Math.max(maxDiameter, myDiameter);
//
//   traverse(root.left);
//   traverse(root.right);
// }
//
// function diameterOfBinaryTree(root) {
//   maxDiameter = 0;
//   // 对每个节点计算直接，求最大直径
//   traverse(root);
//   return maxDiameter;
// }

/*
这个解法是正确的，但是运行时间很长，原因也很明显，traverse 遍历每个节点的时候还会调用递归函数 maxDepth，
而 maxDepth 是要遍历子树的所有节点的，所以最坏时间复杂度是 O(N^2)。

这就出现了刚才探讨的情况，前序位置无法获取子树信息，所以只能让每个节点调用 maxDepth 函数去算子树的深度。

那如何优化？我们应该把计算「直径」的逻辑放在后序位置，准确说应该是放在 maxDepth 的后序位置，因为 maxDepth 的后序位置是知道左右子树的最大深度的。
 */
let maxDiameter = 0;

function maxDepth(root) {
  if (!root) return 0;
  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);
  // 后续位置，顺便计算最大直径
  const myDiameter = leftMax + rightMax;
  maxDiameter = Math.max(myDiameter, maxDiameter);
  return 1 + Math.max(leftMax, rightMax);
}

function diameterOfBinaryTree(root) {
  maxDiameter = 0;
  maxDepth(root);
  return maxDiameter;
}
