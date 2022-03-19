/**
 * 实现不定深度的数组扁平化函数
 */

const arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]

/**
 * @description 用普通的递归实现即可
 */
const flatten = (arr) => {
  const result = [];
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      result.push(...flatten(item))
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten(arr))
