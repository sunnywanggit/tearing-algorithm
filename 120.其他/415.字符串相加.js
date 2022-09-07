/**
 * 题目：https://leetcode-cn.com/problems/add-strings/
 */
const addStrings = function (num1, num2) {
  let res = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? Number(num1[i]) : 0;
    const n2 = j >= 0 ? Number(num2[j]) : 0;
    const tmp = n1 + n2 + carry;
    carry = Number(tmp / 10);
    res = String(tmp % 10) + res;
    i -= 1;
    j -= 1;
  }
  return carry ? `1${res}` : res;
};

console.log(addStrings('11', '123'));
