// 这个是我自己比
// const searchRange = function (nums, target) {
//   let first = -1;
//   let last = -1;
//   const len = nums.length;
//   for (let i = 0; i < len; i += 1) {
//     const item = nums[i];
//     if (item === target) {
//       if (first === -1) {
//         first = i;
//       } else if (last === -1) {
//         last = i;
//       }
//     }
//   }
//   return first === -1 ? [first, last] : [first, last === -1 ? first : last];
// };

const nums = [5, 7, 7, 8, 10];
const target = 6;

console.log(searchRange(nums, target));
