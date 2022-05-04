/**
 * 题目：https://leetcode-cn.com/problems/remove-k-digits/
 * 题解：https://leetcode-cn.com/problems/remove-k-digits/solution/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-5/
 */

const removeKdigits = function (num, k) {
  const stack = [];
  const len = num.length;
  for (let i = 0; i < len; i += 1) {
    // 单调栈代码模板
    while (stack.length && num[i] < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k -= 1;
    }

    // 防止 0 作为数字的开头
    if (!stack.length && num[i] === '0') {
      continue;
    }
    stack.push(num[i]);
  }

  // 此时栈中元素单调递增，若 k 没用完的话删掉栈顶元素
  while (k > 0 && stack.length) {
    stack.pop();
    k -= 1;
  }
  // 若最后没剩下数字，就是 0
  if (!stack.length) {
    return '0';
  }
  return stack.join('');
};
const num = '1432219';
const k = 3;

console.log(removeKdigits(num, k));
