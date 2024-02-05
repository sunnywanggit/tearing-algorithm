/*
  题目：https://leetcode.cn/problems/jump-game-iii/
 */
const canReach = function (arr, start) {
  const n = arr.length;
  const visited = [];
  const queue = [start];
  while (queue.length) {
    const index = queue.pop();
    const val = arr[index];
    if (val === 0) {
      return true;
    }
    const left = index - val;
    const right = index + val;
    if (left >= 0 && !visited[left]) {
      queue.push(left);
    }
    if (right < n && !visited[right]) {
      queue.push(right);
    }
    visited[index] = true;
  }
  return false;
};
