/**
 * 实现不定深度的数组扁平化函数
 */

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

const isArr = (arr) => Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]';

/**
 * @description 用普通的递归实现即可
 */

function flatten(arr) {
  const result = [];
  const len = arr.length;
  if (!len) return result;
  for (let i = 0; i < len; i += 1) {
    const item = arr[i];
    if (isArr(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten(arr));
