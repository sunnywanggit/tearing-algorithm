/**
 * 题目：https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param target
 * @param nums
 * 时间复杂度： O(n)
 * 空间复杂度：O(1) 我们没有开辟任何的数组
 */
const minSubArrayLen = function(target, nums) {
  // nums[l,r] 为我们的滑动窗口，注意，这里是前闭后闭
  // 在最初的时候我们希望窗口中不包含任何元素，所以将 r 设置为 -1
  let l = 0;
  let r = -1;
  let sum = 0;
  // 我们找到的最小的连续子数组的长度,在这里我们将这个长度设置为整个数组的长度+1，
  // 这是因为之后我们要去取最小值，在这里我将它设置为一个最大的值，我们是不可能取到
  // 这个值的，在下面的逻辑中，一旦我们找到了一个连续子数组，我们只需要取二者其中的最小值就好了
  let result = nums.length + 1;
  while (l <= nums.length) {
    // r+1 < nums.length 防止数组越界
    if (r+1 <= nums.length && sum < target) { // 将窗口的右边界向前扩展一个
      r += 1;
      sum += nums[r]
    } else {
      sum -= nums[l];
      l += 1;
    }
    if (sum >= target) {
      result = result > r-l+1 ? r-l+1 : result;
    }
  }
  // 还要处理遍历了一遍整个数组都没有解的情况
  if (result === nums.length + 1) {
    return 0;
  }
  return  result;
};

