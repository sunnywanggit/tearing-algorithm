/*
  题目：https://leetcode.cn/problems/matchsticks-to-square/
 */

const makesquare = function (matchsticks) {
  const totalLen = matchsticks.reduce((pre, cur) => pre + cur, 0);
  // 如果总长度不是4 的倍数，那么不可能拼成正方形，返回 false
  if (totalLen % 4 !== 0) return false;
  // 为了减少搜索量，需要对火柴长度从大到小进行排序。
  matchsticks.sort((a, b) => b - a);

  const edges = new Array(4).fill(0);

  const dfs = (index, matchsticks, edges, len) => {
    if (index === matchsticks.length) return true;
    for (let i = 0; i < edges.length; i += 1) {
      edges[i] += matchsticks[index];
      if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) {
        return true;
      }
      edges[i] -= matchsticks[index];
    }
    return false;
  };

  return dfs(0, matchsticks, edges, Math.floor(totalLen / 4));
};
const matchsticks = [3, 3, 3, 3, 4];

console.log(makesquare(matchsticks));
