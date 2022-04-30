/**
 * 题目：https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

// const isPalindrome = function (s) {
//   if (!s.length) return true;
//   let l = 0;
//   let r = s.length - 1;
//   while (l < r) {
//     if (s[l] !== s[r]) {
//       return false;
//     }
//     l += 1;
//     r -= 1;
//   }
//   return true;
// };
//
// let result = '';
//
// const dfs = function (s, index) {
//   const len = s.length;
//   if (!s || index === len - 1) return result;
//   let temp = '';
//   for (let i = index; i < len; i += 1) {
//     temp = `${temp}${s[i]}`;
//     if (isPalindrome(temp)) {
//       result = temp.length > result.length ? temp : result;
//     }
//   }
//   const dfsResult = dfs(s, index + 1);
//   result = dfsResult.length > result.length ? dfsResult : result;
//   return result;
// };
//
// /**
//  * @description 这个是我自己想的比较本的方法，使用的是动态规划
//  */
// const longestPalindrome = function (s) {
//   if (s.length <= 1) return s;
//   result = '';
//   return dfs(s, 0);
// };

/*
  找回文串的难点在于，回文串的的长度可能是奇数也可能是偶数，解决该问题的核心是从中心向两端扩散的双指针技巧。（这个思路真的很棒啊）
 */
// 如果回文串的长度为奇数，则它有一个中心字符；如果回文串的长度为偶数，则可以认为它有两个中心字符。所以我们可以先实现这样一个函数：
// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
const palindrome = (s, l, r) => {
  // 防止索引越界
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    // 双指针，向两边展开
    l -= 1; r += 1;
  }
  // 返回以 s[l] 和 s[r] 为中心的最长回文串
  return s.substring(l + 1, r);
};

const longestPalindrome = (s) => {
  let res = '';
  for (let i = 0; i < s.length; i += 1) {
    // 以 s[i] 为中心的最长回文子串
    const s1 = palindrome(s, i, i);
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    const s2 = palindrome(s, i, i + 1);
    // res = longest(res, s1, s2)
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

const s = 'babad';

console.log(longestPalindrome(s));
