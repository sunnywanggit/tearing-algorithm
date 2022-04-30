/*
  题目：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */

// 真扯淡的，这么简单的题我竟然做了这么久
// 用 for 循环的效率要比用 for of 的效率高
const replaceSpace = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') {
      res += '%20';
    } else {
      res += s[i];
    }
  }
  return res;
};
const s = 'We are happy.';
console.log(replaceSpace(s));
