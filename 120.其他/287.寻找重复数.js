/**
 * 题目：https://leetcode-cn.com/problems/find-the-duplicate-number/
 */

/**
 * @description 链表 + 快慢指针
 * 题解：https://leetcode-cn.com/problems/find-the-duplicate-number/solution/kuai-man-zhi-zhen-de-jie-shi-cong-damien_undoxie-d/
 */
// todo 这道题需要多看几遍，看完答案我都不是特别的明白

const findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  slow = nums[slow];
  fast = nums[nums[fast]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  let pre1 = 0;
  let pre2 = slow;
  while (pre1 !== pre2) {
    pre1 = nums[pre1];
    pre2 = nums[pre2];
  }
  return pre1;
};

const nums = [1, 3, 4, 2, 2];

console.log(findDuplicate(nums));
