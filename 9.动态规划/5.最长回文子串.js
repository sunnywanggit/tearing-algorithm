/**
 * 题目：https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

// todo 这道题我做出来了，但是官网的测试用例不通过，好奇怪啊

const isPalindrome = function (s) {
  if (!s.length) return true;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
};

let result = '';

const dfs = function (s, index) {
  const len = s.length;
  if (!s || index === len - 1) return result;
  let temp = '';
  for (let i = index; i < len; i += 1) {
    temp = `${temp}${s[i]}`;
    if (isPalindrome(temp)) {
      result = temp.length > result.length ? temp : result;
    }
  }
  const dfsResult = dfs(s, index + 1);
  result = dfsResult.length > result.length ? dfsResult : result;
  return result;
};

const longestPalindrome = function (s) {
  result = '';
  return dfs(s, 0);
};

const s = 'a';

console.log('rrrr', longestPalindrome(s));
// longestPalindrome(s)
