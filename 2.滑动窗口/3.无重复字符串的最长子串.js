/**
 * 题目：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 *
 * 注意：1.字符集？只有字母还是数字+字母？2.大小写是否敏感
 */

/**
 * @description 滑动窗口
 */
// todo
const lengthOfLongestSubstring = (s) => {
  const freq = new Set();
  let L = 0;
  let R = -1; // 滑动窗口的范围为 [l,r]
  let maxLen = 0; // 我们找到的最长子串的长度

  while (L < s.length) {
    // R + 1 < s.length 防止数组越界
    if (R + 1 < s.length && !freq.has(s[R + 1])) {
      R += 1;
      freq.add(s[R]);
    } else {
      freq.delete(s[L]);
      L += 1;
    }

    maxLen = Math.max(maxLen, R - L + 1);
  }
  return maxLen;
};
