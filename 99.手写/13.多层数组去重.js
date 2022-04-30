/**
 * @description 利用 hasOwnProperty 对数组进行去重
 * 优点：可以对所有的类型进行去重
 */

const unique = (arr) => {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (Array.isArray(item)) {
      result.push(unique(item));
    } else if (!obj.hasOwnProperty(typeof item + item)) {
      obj[typeof item + item] = true;
      result.push(item);
    }
  }
  return result;
};

const arr = [
  1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {},
  [
    1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {},
  ],
];

console.log(unique(arr));
