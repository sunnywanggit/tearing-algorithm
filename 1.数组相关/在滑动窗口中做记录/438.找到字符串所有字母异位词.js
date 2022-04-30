/**
 * 题目：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 *  chui todo
 */

const findAnagrams = function(s, p) {
  let l = 0;
  let r = -1; // 滑动窗口范围 [l,r]
  let result = [];

  while (l < s.length) {
    if(r + 1 < s.length && p[s[r+1]] ) {
      r += 1;

    }
  }

};
