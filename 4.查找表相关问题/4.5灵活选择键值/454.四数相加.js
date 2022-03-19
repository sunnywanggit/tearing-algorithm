/**
 * 题目：https://leetcode-cn.com/problems/4sum-ii/
 *
 * 解题思路1：将 nums3 + nums4 的每一种可能放入查找表,时间复杂读和空间复杂度都是O(n2)
 *
 * 解题思路2：将 nums1 + nums2 和 nums3 + nums4 的每一种可能放入两个查找表,时间复杂读和空间复杂度都是O(n2)
 */

const fourSumCount = function(nums1, nums2, nums3, nums4) {
  const len = nums1.length;
  const unOrderedMap = new Map();
  let result = 0;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(!unOrderedMap.get(nums1[i] + nums2[j])) {
        unOrderedMap.set(nums1[i] + nums2[j], 1)
      } else {
        unOrderedMap.set(nums1[i] + nums2[j], unOrderedMap.get(nums1[i] + nums2[j]) + 1)
      }
    }
  }

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(unOrderedMap.get(0-nums3[i]-nums4[j])){
        result += 1;
      }
    }
  }
  return result;
};

const nums1 = [1,2];
const nums2 = [-2,-1];
const nums3 = [-1,2];
const nums4 = [0,2];

fourSumCount(nums1,nums2,nums3,nums4);

