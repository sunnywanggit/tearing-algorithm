/*
  题目：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 */

/*
  方法：计数排序
 */
const getLeastNumbers = function (arr, k) {
  const result = [];
  const len = arr.length;
  if (!k || !len) return result;
  const counter = new Array(10001).fill(0);
  for (const num of arr) {
    counter[num] += 1;
  }

  // 根据 counter 数组从头导出 k 个数作为返回结果
  let index = 0;
  for (let i = 0; i < counter.length; i += 1) {
    while (counter[i] > 0 && index < k) {
      counter[i] -= 1;
      result[index] = i;
      index += 1;
    }
    if (index === k) break;
  }
  return result;
};

const arr = [0, 1, 2, 1];
const k = 1;

console.log(getLeastNumbers(arr, k));
