/**
 * 题目：https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

const intersection = function(nums1, nums2) {
  const base = new Set(nums1);
  const result = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if(base.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return Array.from(result)
};

const nums1 = [1,2,2,1]
const nums2 = [2,2]

intersection(nums1, nums2)

