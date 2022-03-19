/**
 * 题目：https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 题解：https://leetcode-cn.com/problems/longest-valid-parentheses/solution/zui-chang-you-xiao-gua-hao-by-powcai/
 *
 * 对于这种括号匹配问题，一般都是使用栈
 * 我们先找到所有可以匹配的索引号，然后找出最长连续数列！
 * 例如：s = )(()())，我们用栈可以找到，
 * 位置 2 和位置 3 匹配，
 * 位置 4 和位置 5 匹配，
 * 位置 1 和位置 6 匹配，
 * 这个数组为：2,3,4,5,1,6 这是通过栈找到的，我们按递增排序！1,2,3,4,5,6
 * 找出该数组的最长连续数列的长度就是最长有效括号长度！
 * 所以时间复杂度来自排序：O(nlogn)O(nlogn)。
 * 接下来我们思考，是否可以省略排序的过程,在弹栈时候进行操作呢?
 * 直接看代码理解!所以时间复杂度为：O(n)O(n)。
 *
 * todo 优化的解法有空再看吧
 *
 */

const s = '()(()';
const longestConsecutive = (nums) => {
  let res = 0;
  const dict = new Map();
  nums.forEach((item) => {
    if (!dict.has(item)) {
      let left = dict.get(item - 1);
      if (left === undefined) left = 0;

      let right = dict.get(item + 1);
      if (right === undefined) right = 0;

      dict.set(item, 1);
      const length = left + 1 + right;
      res = Math.max(res, length);
      dict.set(item - left, length);
      dict.set(item + right, length);
    }
  });
  return res;
};

const longestValidParentheses = function (s) {
  const result = 0;
  if (!s) return result;
  const len = s.length;
  const stack = [];
  const indexArray = [];
  for (let i = 0; i < len; i += 1) {
    const item = s[i];
    if (item === '(' || item === '[' || item === '{') {
      stack.push({ item, index: i });
    } else {
      let matched;
      if (item === ')') matched = '(';
      if (item === ']') matched = '[';
      if (item === '}') matched = '{';
      // eslint-disable-next-line no-continue
      if (!stack.length) continue;
      const match = stack.pop();
      if (match.item === matched) {
        indexArray.push(match.index, i);
      }
    }
  }
  return longestConsecutive(indexArray);
};

longestValidParentheses(s);
