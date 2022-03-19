/**
 * 题目：https://leetcode-cn.com/problems/contains-duplicate/
 */

const containsDuplicate = function(nums) {
  const len = nums.length;
  const set = new Set();
  for(let i = 0; i < len; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i])
  }
  return  false;
};

const nums = [1,2,3,1];

console.log(containsDuplicate(nums))
