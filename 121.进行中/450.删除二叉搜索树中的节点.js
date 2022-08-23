/*
  https://github.com/sl1673495/leetcode-javascript/issues/62
 */

const deleteNode = function (root, key) {
  // 找到右子树中最小的节点
  function findMin(root) {
    while (root.left) root = root.left;
    return root;
  }

  if (!root) return null;

  if (root.val === key) {
    if (!root.left && !root.right) return root;
    if (!root.right && root.left) root = root.left;
    if (!root.left & root.right) root = root.right;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
