/*
  题目：https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 */
const printNumbers = function (n) {
  const len = 10 ** n;
  const res = [];
  for (let i = 1; i < len; i += 1) {
    res.push(i);
  }
  return res;
};

console.log(printNumbers(3));
