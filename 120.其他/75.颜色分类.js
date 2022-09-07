/**
 * 题目： https://leetcode-cn.com/problems/sort-colors/
 *
 *
 */

/**
 * @description 解法一，计数排序，分别统计0 1 2 元素的个数，然后再放回数组就好了 * 时间复杂度O(n) 空间复杂度 O(1)
 */
function sortColors1 () {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    // 防止数组越界
    console.assert(nums[i] >= 0 && nums[i] <= 2);
    arr[nums[i]]++
  }

  let index = 0;
  for(let i=0; i<arr[0]; i++) {
    nums[index++] = 0;
  }

  for(let i=0; i<arr[1]; i++) {
    nums[index++] = 1;
  }

  for(let i=0; i<arr[2]; i++) {
    nums[index++] = 2;
  }

}

/**
 * @description 三路快排
 */
function sortColors2 () {

}

