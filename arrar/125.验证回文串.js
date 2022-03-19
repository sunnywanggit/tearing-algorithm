/**
 * 题目：https://leetcode-cn.com/problems/valid-palindrome/
 *
 * 思路：对撞指针
 *
 * 需要注意的点：1.空字符串是否是回文串 2.字符的定义，只有数字和字母还是所有的 ASCII 都是可以的，3.要不要考虑大小写
 */

const s = "A man, a plan, a canal: Panama";

const isPalindrome = function(s) {
  s = s.replace(/[\W|_]/g, "").toLowerCase();
  if(!s.length) return true;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if(s[l] !== s[r]) {
      return false;
    }
    l++;
    r--
  }
  return true;
};

console.log(isPalindrome(s));
