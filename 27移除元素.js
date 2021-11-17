/*
  题目： https://leetcode-cn.com/problems/remove-element/

  注意：在做这道题之前，有些东西你要和面试官确认
  1.如何定义删除？从数组中去除，还是放在数组的末尾
  2.剩余元素的排列是否要保证原有的相对顺序
  3.是否有空间复杂度的要求
 */

let nums = [3,2,2,3], val = 3

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // 只要发现值不等于3的元素，就和 k 位置的元素进行交换(k从零开始)交换完成之后，再对k++
    if (nums[i] !== val) {
      // 避免自己和自己交换的情况出现，减少性能的损耗
      if (i !== k) {
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
        k++;
      }
    }
  }
  return k;
}

console.log(removeElement(nums, val))
