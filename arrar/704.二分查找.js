/**
 * 题目：https://leetcode-cn.com/problems/binary-search/
 *
 * 技巧：在做这道题的时候，边界值的定义一定要清楚
 */

const nums = [-1, 0, 3, 5, 9, 12];

const target = 9;

const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1; // 在 [l,r] 左闭右闭的区间中寻找 target,注意这里的区间，在开始的时候一定要定义好
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      r = mid - 1; // [l,mid-1]
    }
    if (nums[mid] < target) {
      l = mid + 1; // [mid+1,r]
    }
  }
  return -1;
};

console.log(search(nums, target));
