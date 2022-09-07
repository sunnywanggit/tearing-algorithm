/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
  function leftSearch(nums, target) {
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
    if (l >= nums.length || nums[l] !== target) {
      return -1;
    }
    return l;
  }
  function rightSearch(nums, target) {
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
    if (r < 0 || nums[r] !== target) {
      return -1;
    }
    return r;
  }
  const left = leftSearch(nums, target);
  const right = rightSearch(nums, target);
  return (left < 0 || right < 0) ? 0 : right - left + 1;
};

// const nums = [1, 2, 3];
// const target = 8;

const nums = [5, 7, 7, 8, 8, 10];
const target = 6;

console.log(search(nums, target));
