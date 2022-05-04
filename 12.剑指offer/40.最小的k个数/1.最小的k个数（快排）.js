/*
  题目：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 */

// 先快速排序，然后取前k个数字就可以了
const getLeastNumbers = function (arr, k) {
  const len = arr.length;
  if (!k || !len) return [];

  function quickSort(nums) {
    const len = nums.length;
    if (len < 2) return nums;
    const cur = nums[len - 1];
    const left = nums.filter((v, i) => v <= cur && i !== len - 1);
    const right = nums.filter((v) => v > cur);
    return [...quickSort(left), cur, ...quickSort(right)];
  }

  return quickSort(arr).slice(0, k);
};

const arr = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4];
const k = 8;

console.log(getLeastNumbers(arr, k));
