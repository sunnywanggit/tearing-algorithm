/** *
 * 题目：https://leetcode-cn.com/problems/valid-parentheses/ （小米）
 *
 */

const s = '()[]{}';

const isValid = function (s) {
  const stack = [];
  const len = s.length;

  for (let i = 0; i < len; i += 1) {
	  const item = s[i];
	  if (item === '(' || item === '[' || item === '{') {
      stack.push(item);
	  } else {
      if (!stack.length) return false;
      let match;
      if (item === ')') match = '(';
      if (item === ']') match = '[';
      if (item === '}') match = '{';
      if (stack.pop() !== match) return false;
	  }
  }
  return !stack.length;
};

console.log(isValid(s));
