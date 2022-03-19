/**
 * 题目：https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 *
 * 思路：对撞指针
 */

const s = "hello"

const reverseVowels = function(s) {
  const isVowel = (char) => {
    const vowels = 'aeiou'
    return vowels.includes(char.toLocaleLowerCase());
  }

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (isVowel(s[l]) && !isVowel(s[r])) {
      r--;
    } else if (!isVowel(s[l]) && isVowel(s[r])) {
      l++
    } else if (isVowel(s[l]) && isVowel(s[r])) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
    } else {
      l++;
      r--;
    }
  }
  return s;
};

console.log(reverseVowels(s));
