/*
  题目：https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/
 */
const maxDepth = function (root) {
  let deep = 0;
  if (!root) return deep;
  const queue = [root];
  while (queue.length) {
    deep += 1;
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return deep;
};
