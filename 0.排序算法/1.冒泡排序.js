// function bubbleSort(arr) {
//   // 缓存数组长度
//   const len = arr.length;
//   // 外层循环用于控制从头到尾的比较+交换到底有多少轮
//   for (let i = 0; i < len; i += 1) {
//     // 内层循环用于完成每一轮遍历过程中的重复比较+交换
//     for (let j = 0; j < len - 1; j += 1) {
//       // 若相邻元素前面的数比后面的大
//       if (arr[j] > arr[j + 1]) {
//         // 交换两者
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   // 返回数组
//   return arr;
// }

function bubble(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble([3, 6, 2, 4, 1]));
