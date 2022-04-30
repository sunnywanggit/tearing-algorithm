const count = (root) => {
  if (!root) return 0;
  const leftCount = count(root.left);
  const rightCount = count(root.right);
  console.log(`${root}的左子树有${leftCount}个节点，右子树有${rightCount}个节点`);
  return leftCount + rightCount + 1;
};
