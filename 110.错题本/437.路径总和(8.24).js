/**
 * 题目；https://leetcode-cn.com/problems/path-sum-iii/
 */

// 以 root 为根节点的二叉树中，寻找和为 sum 的路径，返回这样的路径个数
const pathSum = function (root, targetSum) {
  // 在以 node 为根节点的二叉树中，寻找包含 node 的路径，和为 sum，返回这样的路径个数
  function findPath(node, targetSum) {
    if (!node) return 0;

    let result = 0;
    if (node.val === targetSum) result += 1;

    result += findPath(node.left, targetSum - node.val);
    result += findPath(node.right, targetSum - node.val);

    return result;
  }

  if (!root) return 0;
  // 包含这个节点且和为sum 的值
  let result = findPath(root, targetSum);
  // 以及在两颗子树中取寻找不包含这两个节点且和为 sum 的值
  result += pathSum(root.left, targetSum);
  result += pathSum(root.right, targetSum);

  return result;
};
