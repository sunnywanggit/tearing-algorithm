/**
 * @description 二分查找（左右指针）
 * @param {Array} arr 待查找的数组
 * @param {number} n 数组中元素的个数
 * @param {any}  target 要查找的元素
 */

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  // 当 l === r 的时候，区间[l,r]依然是有效的，相当于是只有一个元素的区间
  while (l <= r) {
    const mid = parseInt(l + (r - l) / 2, 10);
    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      r = mid - 1;
    }
  }
  if (l >= arr.length || arr[l] !== target) return -1;

  return l;
}

const nums = [1, 2, 3, 4, 5];

console.log(binarySearch(nums, 4));
