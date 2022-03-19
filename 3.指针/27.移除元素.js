/**
 * 题目： https://leetcode-cn.com/problems/remove-element/
 */

/**
 * @description 快慢指针
 */
const removeElement = (nums, val) => {
  const len = nums.length;
  let slow = 0;
  let fast = 0;
  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow += 1;
    }
    fast += 1;
  }
  return slow;
};

const nums = [3, 2, 2, 3];
const val = 2;

console.log(removeElement(nums, val));
