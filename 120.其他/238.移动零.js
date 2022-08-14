/**
 * 题目：https://leetcode-cn.com/problems/move-zeroes/
 */
const moveZeroes = function (nums) {
  const len = nums.length;
  let L = 0;
  let R = len - 1;
  while (L < R) {
    if (nums[L] === 0) {
      nums.splice(L, 1);
      nums[R] = 0;
      R -= 1;
    } else {
      L += 1;
    }
  }
  return nums;
};

const nums = [0, 0, 1];

console.log(moveZeroes(nums));
