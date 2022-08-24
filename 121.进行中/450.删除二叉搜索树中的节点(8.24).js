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
    if (!root.right) return root.left;
    if (!root.left) return root.right;
    // 获取右子树的最小节点
    const minNode = findMin(root.right);
    root.right = deleteNode(root.right, minNode.val);
    // 用右子树的最小节点替换 root 节点
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
