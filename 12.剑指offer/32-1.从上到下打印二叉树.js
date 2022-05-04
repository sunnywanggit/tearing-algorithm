/*
  题目：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/submissions/
  其实本质就是广度优先遍历
 */

const levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const current = queue.shift();
      if (current) {
        result.push(current.val);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return result;
};
