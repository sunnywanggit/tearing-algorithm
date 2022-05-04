/*
  题目：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
*/

const levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    // 用来收集每一层的节点
    const level = [];
    // 这里的 len 值，一定需要提取出来
    const len = queue.length;
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
    result.push([...level]);
  }
  return result;
};
