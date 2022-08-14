/*
  题目：https://leetcode.cn/problems/valid-boomerang/
 */

/*
计算从 points[0] 分别指向 points[1] 和 points[2] 的向量。
[三个点不相同且不在同一条直线上]等价于[这两个向量的叉乘结果不相等]
 */
const isBoomerang = function (points) {
  const v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]];
  const v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]];
  return v1[0] * v2[1] !== v1[1] * v2[0];
};
