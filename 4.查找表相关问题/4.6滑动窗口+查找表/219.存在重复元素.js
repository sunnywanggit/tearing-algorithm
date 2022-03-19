/**
 * 题目：https://leetcode-cn.com/problems/contains-duplicate-ii/
 *
 * 解题思路；查找表 set + 滑动窗口。在这个数组中，能不能找到一个 k + 1 的区间，在这个区间里面存在两个元素， 这两个元素相等。
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(k) 这个查找表中最多存放 k+1 个值
 *
 *
 */

const containsNearbyDuplicate = function(nums, k) {
  const unOrderSet = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(unOrderSet.has(nums[i])) {
      return true;
    }
    unOrderSet.add(nums[i]);
    // 保持 record 中最多有 k 个元素
    if(unOrderSet.size === k +1) {
      unOrderSet.delete(nums[i-k]);
    }
  }
  return  false;
};

const nums = [1,0,1,1]
const k = 1

console.log(containsNearbyDuplicate(nums, k))
