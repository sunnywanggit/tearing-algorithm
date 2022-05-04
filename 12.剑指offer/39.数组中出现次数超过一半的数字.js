/*
  题目：https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 */
const majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len === 1) return nums[0];
  let L = 0;
  let R = 1;
  let times = 1;
  while (R < len) {
    if (nums[R] === nums[L]) {
      times += 1;
      if (times > len / 2) return nums[R];
      R += 1;
    } else {
      times = 1;
      L = R;
      R += 1;
    }
  }
};

const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];

console.log(majorityElement(nums));
