// 初始化二维数组
/**
 * @description 初始化二维数组
 * @param {number} l1 一维数组的长度
 * @param {number} l2 二维数组的长度
 */
const initArr = function (l1, l2) {
  const arr = []; // 声明一维数组
  for (let i = 0; i < l1; i += 1) {
    arr[i] = []; // 声明二维数组
    for (let j = 0; j < l2; j += 1) {
      arr[i][j] = 0; // 数组初始化为0
    }
  }
  return arr;
};

const isObj = (obj) => typeof obj === 'object' && obj !== null;

module.exports = {
  isObj,
  initArr,
};
