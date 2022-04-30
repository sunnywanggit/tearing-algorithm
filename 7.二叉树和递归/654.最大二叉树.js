/*
  题目：https://leetcode-cn.com/problems/maximum-binary-tree/
  题解：https://labuladong.github.io/algo/2/19/35/
 */

const build = (nums, l, r) => {
  // base case
  if (l > r) return null;
  // 找到数组中最大的值对应的索引
  let index = -1;
  let maxVal = -Infinity;
  for (let i = l; i <= r; i += 1) {
    if (nums[i] > maxVal) {
      maxVal = nums[i];
      index = i;
    }
  }
  // 先构造出根节点
  const root = new TreeNode(maxVal);
  // 递归的调用构造左右子树
  root.left = build(nums, l, index - 1);
  root.right = build(nums, index + 1, r);
  return root;
};

const constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};
