const spiralOrder = function (matrix) {
  const result = [];
  const m = matrix.length;
  if (!m) return result;
  const n = matrix[0].length;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;
  while (result.length < m * n) {
    if (top <= right) {
      for (let i = top; i <= right; i += 1) {
        result.push(matrix[top][i]);
      }
      top += 1;
    }
    if (left <= right) {
      for (let i = top; i <= bottom; i += 1) {
        result.push(matrix[i][right]);
      }
      right -= 1;
    }
    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }
    if (left <= right) {
      // 在左侧从下向上遍历
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }
      // 左边界右移
      left += 1;
    }
  }
  return result;
};
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrix));
