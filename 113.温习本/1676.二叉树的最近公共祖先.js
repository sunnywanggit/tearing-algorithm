/*
  题目：https://mp.weixin.qq.com/s/njl6nuid0aalZdH5tuDpqQ
 */

const lowestCommonAncestor = (root, nodes) => {
  const find = (root, values) => {
    if (!root) return null;
    if (values.includes(root.val)) return root;
    const left = find(root.left, values);
    const right = find(root.right, values);
    if (left && right) return root;
    return left || right;
  };

  const values = nodes.map((node) => node.val);
  return find(root, values);
};
