/**
 * 题目：https://leetcode-cn.com/problems/remove-k-digits/
 * 题解：https://leetcode-cn.com/problems/remove-k-digits/solution/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-5/
 */

// todo 这道题写的我真蛋疼啊，下来再好好思考下，还有哪里有问题
const removeKdigits = function (num, k) {
  const stack = [];
  const len = num.length;
  const remain = len - k;
  for (let i = 0; i < len; i += 1) {
    const digit = num[i];
    if (k && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k -= 1;
    }
    stack.push(digit);
  }

  return String(+stack.splice(0, remain).join(''));
};

const num = '1234567890';
// const num = '112';
const k = 9;

console.log(removeKdigits(num, k));
