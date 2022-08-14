/*
  题目：https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 */
const lastRemaining = function (n, m) {
  let ans = 0;
  // 最后一轮剩下2个人，所以从2开始反推
  for (let i = 2; i <= n; i += 1) {
    ans = (ans + m) % i;
  }
  return ans;
};

console.log(lastRemaining(5, 2));
