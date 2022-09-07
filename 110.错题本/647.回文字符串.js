// 暴力解法
// const countSubstrings = function (s) {
//   const len = s.length;
//   if (!len || !s) return 1;
//
//   let ans = 0;
//   function isPalindrome(s) {
//     if (!s.length) return true;
//     let l = 0;
//     let r = s.length - 1;
//     while (l < r) {
//       if (s[l] !== s[r]) {
//         return false;
//       }
//       l += 1;
//       r -= 1;
//     }
//     return true;
//   }
//   for (let i = 0; i < len; i += 1) {
//     for (let j = i + 1; j < len + 1; j += 1) {
//       if (isPalindrome(s.substring(i, j))) ans += 1;
//     }
//   }
//   return ans;
// };

const initArr = function (l1, l2) {
  const arr = []; // 声明一维数组
  for (let i = 0; i < l1; i += 1) {
    arr[i] = []; // 声明二维数组
    for (let j = 0; j < l2; j += 1) {
      arr[i][j] = 0; // 数组初始化为0
    }
  }
  return arr;
};

/*
  动态规划：思路还有有点巧妙的

  状态：dp[i][j] 表示字符串 s 在 [i,j] 区间的子串是否是一个回文串。
  状态转移方程：当 s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]) 时，dp[i][j] = true，否则为false

  状态转移方程解释：
  1.当只有一个字符时，比如 a 自然是一个回文串。
  2.当有两个字符时，如果是相等的，比如 aa，也是一个回文串。
  3.当有三个及以上字符时，比如 ababa 这个字符记作串 1，把两边的 a 去掉，也就是 bab 记作串 2，可以看出只要串2是一个回文串，那么左右各多了一个 a 的串 1 必定也是回文串。所以当 s[i]==s[j] 时，自然要看 dp[i+1][j-1] 是不是一个回文串。
 */
const countSubstrings = function (s) {
  const len = s.length;
  const dp = initArr(len, len);
  let ans = 0;

  for (let j = 0; j < len; j += 1) {
    for (let i = 0; i <= j; i += 1) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        ans += 1;
      }
    }
  }

  return ans;
};

const s = 'abc';

console.log(countSubstrings(s));
