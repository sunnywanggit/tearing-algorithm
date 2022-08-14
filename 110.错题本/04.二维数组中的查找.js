/*
  题目：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */

// todo 这道题肯定有更好的解法，有空了可以想想
const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const m = parseInt(l + (r - l) / 2, 10);
    if (arr[m] === target) {
      return true;
    } if (arr[m] > target) {
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    }
  }
  return false;
};
const findNumberIn2DArray = function (matrix, target) {
  const len = matrix.length;
  for (let i = 0; i < len; i += 1) {
    if (binarySearch(matrix[i], target)) return true;
  }
  return false;
};

const nums = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

console.log(findNumberIn2DArray(nums, 30));
