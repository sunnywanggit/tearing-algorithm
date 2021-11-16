/**
 * 题目：https://leetcode-cn.com/problems/move-zeroes/
 *
 */

// 思路一： 先遍历原数组，将所有的非零元素放到数组的最前面，然后将其余的元素全部置位0即可
// 空间复杂度也是 O(n) 因为我们新创建了一个数组
// 时间复杂度也是 O(n)
// function moveZeros() {
//   const nums = [0,1,0,3,12]
//   const noZeroNums = [];
//   // 1.先找出数组中所有的非零元素，放到 noZeroNums 数组中
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       noZeroNums.push(nums[i]);
//     }
//   }
//   // 2.将 noZeroNums 所有的元素放入到 nums 前面
//   for (let i = 0; i < noZeroNums.length; i++) {
//     nums[i] = noZeroNums[i];
//   }
//   // 3.将 nums 其余元素全部置空
//   for (let i = noZeroNums.length; i < nums.length; i++) {
//     nums[i] = 0
//   }
// }

// 时间复杂度 O(n)
// 空间复杂度 O(1)
// function moveZeros() {
//   const nums = [0,1,0,3,12]
//   let k = 0; // [0,k) 这个区间内的元素全部都是非0元素
//   // 遍历到第 i 个元素后，保证[0,i],中所有的非0元素，全都按照顺序排列在 [0,k)中
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       nums[k] = nums[i];
//       k += 1;
//     }
//   }
//   // 将 nums 剩余位置全部放置为 0
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// }

function moveZeros() {
  const nums = [0,1,0,3,12]
  let k = 0; // [0,k) 这个区间内的元素全部都是非0元素
  // 遍历到非零的元素，直接和 k 位置的元素进行交换
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      // 避免自己和自己交换的情况出现
      if (i !== k) {
        let temp;
        temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
        k++;
      }
    }
  }
  console.log(nums)
}

moveZeros();

