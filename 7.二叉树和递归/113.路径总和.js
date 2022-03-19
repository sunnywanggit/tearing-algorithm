/**
 * 题目：https://leetcode-cn.com/problems/path-sum-ii/
 * 题解：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-kcb0/
 */
const result = [];

const dfs = (root, targetSum, path) => {
  if (!root) return;
  targetSum -= root.val;
  const newPath = [...path, root.val];
  if (!root.left && !root.right && targetSum === 0) {
    result.push(newPath);
    return;
  }
  dfs(root.left, targetSum, newPath);
  dfs(root.right, targetSum, newPath);
};

const pathSum = function (root, targetSum) {
  dfs(root, targetSum, []);
  return result;
};
