/*
  题目：https://leetcode-cn.com/problems/valid-square/
 */
// todo 回去画图思考一下
/*
  1.边长为0，返回false。
  2.对边且对角线相等，一组临边相等。
 */
const validSquare = function (p1, p2, p3, p4) {
  const distance = (p1, p2) => {
    const dist1 = Math.abs(p1[0] - p2[0]);
    const dist2 = Math.abs(p1[1] - p2[1]);
    return dist1 * dist1 + dist2 * dist2;
  };

  const line2line = (p1, p2, p3, p4) => {
    const dist1 = distance(p1, p2);
    const dist2 = distance(p3, p4);
    return dist1 === 0 || dist2 === 0 ? false : dist1 === dist2;
  };

  return line2line(p1, p2, p3, p4) && line2line(p1, p3, p2, p4) && line2line(p1, p4, p2, p3)
    && (line2line(p1, p2, p1, p3) || line2line(p1, p2, p1, p4) || line2line(p1, p3, p1, p4));
};

const p1 = [0, 0];
const p2 = [1, 1];
const p3 = [1, 0];
const p4 = [0, 1];

console.log(validSquare(p1, p2, p3, p4));
