/**
 * 题目： https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @description 快慢指针
 * 题解：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484478&idx=1&sn=685308e10c32ee5ad3508a5789633b3a&chksm=9bd7fa36aca07320ecbae4a53ed44ff6acc95c69027aa917f5e10b93dedca86119e81c7bad26&scene=21#wechat_redirect
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow += 1;
      // 维护 nums[0..slow] 无重复
      nums[slow] = nums[fast];
    }
    fast += 1;
  }
  // 数组长度为索引 + 1
  return slow + 1;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
