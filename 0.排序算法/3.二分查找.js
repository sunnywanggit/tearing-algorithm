/**
 * @description 二分查找（左右指针）
 * @param {Array} arr 待查找的数组
 * @param {number} n 数组中元素的个数
 * @param {any}  target 要查找的元素
 */

function binarySearch(arr, target) {
  // 限定左右两个边界 在 [l...r]的范围中寻找 target，在写算法之前先想清楚变量的意义到底是什么,
  // 这才是这道算法题的核心,一个专业的术语叫做，我们在循环中保证了一个循环的不变量，
  // 就是我们待寻找的 target 始终在 l 到 r 这个左闭右闭的范围里，只要我们能够保证这个循环不变量
  // 我们就能够保证我们的算法是正确的
  let l = 0;
  let r = arr.length - 1;
  // 当 l === r 的时候，区间[l,r]依然是有效的，相当于是只有一个元素的区间
  while (l <= r) {
    const mid = parseInt(l + (r - l) / 2, 10);
    console.log('mid', l, r, mid);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

const nums = [1, 2, 3, 4, 5];

console.log(binarySearch(nums, 4));
