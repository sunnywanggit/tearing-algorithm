/**
 * 题目：https://leetcode-cn.com/problems/reverse-string/
 *
 * 解题思路：对撞指针
 */

const s = ["h","e","l","l","o"]

const reverseString = function(s) {
  if(s.length < 2) return s;

  let l = 0;
  let r = s.length-1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++;
    r--;
  }
  return s;
};

console.log(reverseString(s));
