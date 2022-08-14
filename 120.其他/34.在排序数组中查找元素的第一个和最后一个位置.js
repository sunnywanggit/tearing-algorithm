/*
  题目：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

const searchRange = function (nums, target) {
  function leftBound(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const mid = parseInt(l + (r - l) / 2, 10);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else {
        r = mid - 1;
      }
    }
    if (l >= nums.length || nums[l] !== target) return -1;
    return l;
  }

  function rightBound(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const mid = parseInt(l + (r - l) / 2, 10);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    if (r < 0 || nums[r] !== target) return -1;
    return r;
  }
  const left = leftBound(nums, target);
  const right = rightBound(nums, target);
  return (left < 0 || right < 0) ? [-1, -1] : [left, right];
};

const nums = [5, 7, 7, 8, 10];
const target = 6;

console.log(searchRange(nums, target));
