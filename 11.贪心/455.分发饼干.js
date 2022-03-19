/**
 * 题目：https://leetcode-cn.com/problems/assign-cookies/
 * 题解：《玩转算法面试》10-1
 */

/**
 * @param g 孩子
 * @param s 饼干
 */
const findContentChildren = function (g, s) {
  // 从大到小排序
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  // 指向最大的一块饼干
  let si = 0;
  // 指向最贪心的小朋友
  let gi = 0;
  // 最终的结果，我们让多少个小朋友开心了
  let result = 0;
  while (gi < g.length && si < s.length) {
    if (s[si] >= g[gi]) {
      result += 1;
      si += 1;
      gi += 1;
    } else {
      // 去找下一个最贪心的小朋友
      gi += 1;
    }
  }
  return result;
};

console.log(findContentChildren([3, 2, 1], [1, 1]));
