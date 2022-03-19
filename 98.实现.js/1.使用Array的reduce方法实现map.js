/**
 * 题目：使用 reduce 实现 map
 * 公司：字节
 */

/**
 * @description mdn 实现的 map
 * reduce 若不指定初始值，那么第一次迭代的 previousValue 为 ar[[0], currentValue 为 arr[1], currentIndex 为 1，
 * 若指定初始值，那么第一次迭代的 previousValue 为 initialValue, currentValue为 arr[0], currentIndex 为0.
 */
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce((mappedArray, currentValue, index, array) => {
      // eslint-disable-next-line no-param-reassign
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, 3].mapUsingReduce(
  (currentValue) => {
    console.log('currentValue', currentValue);
  },
);
