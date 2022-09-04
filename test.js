const levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i += 1) {
      const currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.push(level);
  }
  return result;
};
