/*
  题目：https://mp.weixin.qq.com/s/njl6nuid0aalZdH5tuDpqQ
 */

const lowestCommonAncestor = (root, p, q) => {
  const find = (root, p, q) => {
    if (!root || root.val === p || root.val === q) return null;
    const left = find(root.left, p, q);
    const right = find(root.right, p, q);
    if (!left || !right) return null;
    return root;
  };

  return find(root, p, q);
};
