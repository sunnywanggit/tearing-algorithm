/*
  题目：https://leetcode-cn.com/problem-list/xb9nqhhg/
*/
const levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  let flag = 0;
  while (queue.length) {
    flag += 1;
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i += 1) {
      const current = queue.shift();
      if (current) {
        level.push(current.val);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    if (flag % 2 === 0) {
      result.push([...level.reverse()]);
    } else {
      result.push([...level]);
    }
  }
  return result;
};
