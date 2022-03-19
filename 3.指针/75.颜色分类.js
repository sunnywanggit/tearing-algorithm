/**
 * 题目：https://leetcode-cn.com/problems/sort-colors/
 */
const sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  let result = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] === 0) zero += 1;
    if (nums[i] === 1) one += 1;
    if (nums[i] === 2) two += 1;
  }
  result = [];
  result.push(
    ...(new Array(zero).fill(0)),
    ...(new Array(one).fill(1)),
    ...(new Array(two).fill(2)),
  );
  return result;
};
const nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
