/*
  选择排序实现原理：
    首先在未排序序列中找到最小元素，存放到排序序列的起始位置。
    再从剩余未排序元素中继续寻找最小元素，然后放到已排序序列的末尾。

  时间复杂度：o(n2)
 */

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectSort([3, 6, 2, 4, 1]));
