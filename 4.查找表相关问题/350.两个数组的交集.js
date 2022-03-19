/**
 * 题目： https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */

const intersect = function(nums1, nums2) {
  let map = new Map();

  for(let i = 0; i < nums1.length; i++) {
    if (!map.get(nums1[i])) {
      map.set(nums1[i], 1)
    } else {
      let count = map.get(nums1[i]);
      map.set(nums1[i], count += 1)
    }
  }

  const result = [];

  for(let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i]) && map.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      let count = map.get(nums2[i]);
      map.set(nums2[i], count -= 1)
    }
  }

  return result;
};

// 如果两个数组是有序的,则使用双指针的方式进行处理
const intersect2 = function(nums1, nums2) {
  let i1 = 0; // 遍历第一个数组的指针
  let i2 = 0; // 遍历第二个数组的指针
  const result = [];
  while (i1 < nums1.length && i2 < nums2.length ) {
    if (nums1[i1] === nums2[i2]) {
      result.push(nums1[i1]);
      i1 += 1;
      i2 += 1;
    }
    if (nums1[i1] > nums2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }
  return result;
};


const nums1 = [4,5,9]
const nums2 = [4,4,8,9,9]

console.log(intersect2(nums1, nums2));
