/**
 * 题目：https://leetcode-cn.com/problems/path-sum/
 */

var hasPathSum = function(root, targetSum) {

  if (root == null) {
    return false;
  }

  // 到达叶子节点时，递归终止，判断 sum 是否符合条件。
  if (root.left == null && root.right == null) {
      return root.val == targetSum;
  }
  // 递归地判断root节点的左孩子和右孩子。
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
