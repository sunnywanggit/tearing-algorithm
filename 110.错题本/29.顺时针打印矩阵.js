/*
  题目：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */

const spiralOrder = function (matrix) {
  const res = [];
  const m = matrix.length;
  if (!m) return res;
  const n = matrix[0].length;
  // 首先定义 上右下左 四个边界
  let upperBound = 0;
  let rightBound = n - 1;
  let lowerBound = m - 1;
  let leftBound = 0;
  // res.size() == m * n 则遍历完整个数组
  while (res.length < m * n) {
    // todo 这块儿的判断逻辑需要好好梳理一下，不太容易想明白
    if (upperBound <= lowerBound) {
      // 在顶部从左向右遍历
      for (let j = leftBound; j <= rightBound; j += 1) {
        res.push(matrix[upperBound][j]);
      }
      // 上边界下移
      upperBound += 1;
    }

    if (leftBound <= rightBound) {
      // 在右侧从上向下遍历
      for (let i = upperBound; i <= lowerBound; i += 1) {
        res.push(matrix[i][rightBound]);
      }
      // 右边界左移
      rightBound -= 1;
    }

    if (upperBound <= lowerBound) {
      // 在底部从右向左遍历
      for (let j = rightBound; j >= leftBound; j -= 1) {
        res.push(matrix[lowerBound][j]);
      }
      // 下边界上移
      lowerBound -= 1;
    }

    if (leftBound <= rightBound) {
      // 在左侧从下向上遍历
      for (let i = lowerBound; i >= upperBound; i -= 1) {
        res.push(matrix[i][leftBound]);
      }
      // 左边界右移
      leftBound += 1;
    }
  }
  return res;
};

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(spiralOrder(matrix));
