/**
 * 题目：https://leetcode-cn.com/problems/binary-tree-paths/
 * 题解：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-kcb0/
 */

const binaryTreePaths = function (root) {
  const result = [];

  function traverse(root, path) {
    if (!root) return;
    // 前序位置，记录节点值
    path.push(root.val);
    if (!root.left && !root.right) {
      result.push(path.slice().join('->'));
    }
    // 二叉树递归遍历框架，递归遍历左右子树
    traverse(root.left, path);
    traverse(root.right, path);
    // 后续位置，撤销节点值
    path.pop();
  }

  traverse(root, []);
  return result;
};
