/*
  题目：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 */

// todo 暴力解法直接超时了，下来想想有没有更好的解法
const reversePairs = function (nums) {
  const len = nums.length;
  let res = 0;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] > nums[j]) res += 1;
    }
  }
  return res;
};

const nums = [7, 5, 6, 4];

console.log(reversePairs(nums));
