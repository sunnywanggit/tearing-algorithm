/*
  从数列中挑出一个元素，称为 "基准"（pivot）;

  重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
  在这个分区退出之后，该基准就处于数列的中间位置。
 */

function quickSort(arr) {
  if (arr.length < 2) return arr;
  const cur = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const right = arr.filter((v) => v > cur);
  return [...quickSort(left), cur, ...quickSort(right)];
}

console.log(quickSort([3, 6, 2, 4, 1]));
