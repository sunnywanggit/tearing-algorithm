/*
  题目：https://leetcode.cn/problems/maximum-product-subarray/
 */

/*
  动态规划：
  遍历数组时计算当前最大值，不断更新
  令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
  由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
  当负数出现时则 imax 与 imin 进行交换再进行下一步计算
  时间复杂度：O(n)
 */
const maxProduct = function (nums) {
  let max = -Infinity;
  let imax = 1;
  let imin = 1;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < 0) [imax, imin] = [imin, imax];
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    max = Math.max(max, imax);
  }
  return max;
};

const nums = [-2, 3, -4];
// const nums = [0, 2];

console.log(maxProduct(nums));
