/**
 * 公司：携程
 */

// 这个解法还是蛮思路清奇的
const secondHeight = (nums) => {
  let max = nums[0];
  let second = -Infinity;
  const len = nums.length;

  for (let i = 1; i < len; i += 1) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return second;
};

const arr = [7, 3, 19, 40, 4, 7, 1];

console.log(secondHeight(arr));
