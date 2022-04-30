/*
  冒泡算法的原理：
    升序冒泡：两次循环，相邻元素两两比较，如果前面的大于后面的就交换位置
    降序冒泡：两次循环，相邻元素两两比较，如果前面的小于后面的就交换位置
 */

function bubble(arr) {
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i += 1) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j += 1) {
      // 若相邻元素前面的数比后面的大
      if (arr[j] > arr[j + 1]) {
        // 进行交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble([3, 6, 2, 4, 1]));
