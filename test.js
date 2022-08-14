function find(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  const left = find(root.left, val);
  if (left) return left;
  const right = find(root.right, val);
  if (right) return right;
  return null;
}
