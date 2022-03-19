/**
 * 题目：https://leetcode-cn.com/problems/binary-tree-paths/
 * 题解：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-kcb0/
 */

// todo 我觉的我写的是没有问题的，但是测试用例就是通不过

const result = [];

const dfs = (root, path) => {
  if (!root) return;
  // eslint-disable-next-line no-param-reassign
  path += root.val;
  if (!root.left && !root.right) {
    result.push(path);
    // eslint-disable-next-line consistent-return
    return;
  }
  dfs(root.left, `${path}->`);
  dfs(root.right, `${path}->`);
};

const binaryTreePaths = function (root) {
  dfs(root, '');
  return result;
};
