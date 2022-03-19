let result = [];

const dp = (s1, i, s2, j) => {
  if (s1.length === i || s2.length === j) return 0;
  if (s1[i] === s2[j]) {
    result.push(s1[i]);
    dp(s1, i + 1, s2, j + 1);
  } else {
    Math.max(dp(s1, i + 1, s2, j + 1).length, dp(s1, i, s2, j + 1).length, dp(s1, i + 1, s2, j).length);
  }
  return temp;
};

const longChildString = (s1, s2) => {
  result = [];
  return dp(s1, 0, s2, 0);
};

const str1 = 'abcf';
const str2 = 'fabc';

console.log(longChildString(str1, str2));
