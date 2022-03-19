/**
 * 题目：https://leetcode-cn.com/problems/sliding-window-maximum/
 */

const maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len <= 1) return nums;
  const result = [];
  let L = 0;
  let R = k - 1;
  while (R <= len - 1) {
    result.push(nums.slice(L, R + 1).sort((a, b) => b - a)[0]);
    L += 1;
    R += 1;
  }
  return result;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(maxSlidingWindow(nums, k));
