/**
 * 题目：https://leetcode-cn.com/problems/pascals-triangle/
 *
 * 公司：华为（君二）
 */

// todo 需要思考一下，用动态规划的话应该怎么做
const generate = function (numRows) {
  const result = [];
  result[0] = [1];
  if (numRows === 1) return result;
  for (let i = 1; i < numRows; i += 1) {
    const item = [];
    for (let j = 0; j < i + 1; j += 1) {
      item[j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0);
    }
    result.push([...item]);
  }
  return result;
};

console.log(generate(5));
