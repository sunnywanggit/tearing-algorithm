function leftBoundSearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + (right - left) / 2;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      // 别返回，锁定左侧边界
      right = mid - 1;
    }
  }
  // 最后要检查 left 越界的情况
  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }
  return left;
}
