/**
 * 题目：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 */

const heights = [2, 1, 5, 6, 2, 3];

/**
 * @description 暴力解法
 * 首先，要想找到第 i 位置最大面积是什么？
 * 是以i 为中心，向左找第一个小于 heights[i] 的位置 left_i；
 * 向右找第一个小于于 heights[i] 的位置 right_i，
 * 即最大面积为 heights[i] * (right_i - left_i -1)
 */
const largestRectangleArea = function (heights) {
  const len = heights.length;
  let result = 0;
  for (let i = 0; i < len; i += 1) {
    let L = i;
    let R = i;
    while (L >= 0 && heights[L] >= heights[i]) {
      L -= 1;
    }
    while (R < len && heights[R] >= heights[i]) {
      R += 1;
    }

    result = Math.max(result, (R - L - 1) * heights[i]);
  }
  return result;
};

console.log(largestRectangleArea(heights));
