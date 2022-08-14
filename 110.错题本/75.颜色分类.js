/*
  题目：https://leetcode.cn/problems/sort-colors/
 */
// 1.快排
// const sortColors = function (nums) {
//   const len = nums.length;
//   if (!len || len < 2) return nums;
//   const cur = nums[len - 1];
//   const left = nums.filter((item, index) => item <= cur && index !== len - 1);
//   const right = nums.filter((item) => item > cur);
//   return [...sortColors(left), cur, ...sortColors(right)];
// };

// 2. 计数法
// const sortColors = function (nums) {
//   let zero = 0;
//   let one = 0;
//   let two = 0;
//   for (const num of nums) {
//     if (num === 0) {
//       zero += 1;
//     } else if (num === 1) {
//       one += 1;
//     } else if (num === 2) {
//       two += 1;
//     }
//   }
//   return [...Array(zero).fill(0), ...Array(one).fill(1), ...Array(two).fill(2)];
// };

/*
  3.双指针 todo
 */
const sortColors = function (nums) {

};
const nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
