/*
  快速排序
 */
// function sortColors(arr) {
//   if (arr.length < 2) return arr;
//   const cur = arr[arr.length - 1];
//   const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
//   const right = arr.filter((v) => v > cur);
//   return [...sortColors(left), cur, ...sortColors(right)];
// }

/*
  单指针，采用两次遍历的方式
 */

function sortColors(nums) {
  const P = 0;
  for (let i = 0; i < nums.length; i += 1) {

  }
}

const nums = [2, 0, 2, 1, 1, 0];
