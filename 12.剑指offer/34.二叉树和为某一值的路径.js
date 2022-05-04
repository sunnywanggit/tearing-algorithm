/*
  题目：https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 */

const pathSum = function (root, target) {
  const result = [];

  const traverse = (root, target, path) => {
    if (!root) return;
    const newPath = [...path, root.val];
    if (!root.left && !root.right && root.val === target) {
      result.push(newPath);
      return;
    }
    traverse(root.left, target - root.val, newPath);
    traverse(root.right, target - root.val, newPath);
  };

  traverse(root, target, []);
  return result;
};
