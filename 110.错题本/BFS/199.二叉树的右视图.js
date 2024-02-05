/*
  题目：https://github.com/sl1673495/leetcode-javascript/issues/52
 */

const rightSideView = function (root) {
  if (!root) return [];
  const result = [root.val];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const currentNode = queue.shift();
    }
  }
};
