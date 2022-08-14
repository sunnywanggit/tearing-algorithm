/*
  题目：https://leetcode.cn/problems/height-checker/
 */
// 先排序后比较
// const heightChecker = function (heights) {
//   let res = 0;
//   const origin = [...heights];
//   heights.sort((a, b) => a - b);
//   const len = heights.length;
//   for (let i = 0; i < len; i += 1) {
//     if (origin[i] !== heights[i]) res += 1;
//   }
//   return res;
// };

// 计数排序，注意到本题中学生的高度小于等于 100，因此可以使用计数排序。
const heightChecker = function (heights) {
  // 先找出数组中最大的数
  let maxNumber = -1;
  const len = heights.length;
  for (let i = 0; i < len; i += 1) {
    if (heights[i] > maxNumber) {
      maxNumber = heights[i];
    }
  }
  const cnt = new Array(maxNumber + 1).fill(0);
  for (const h of heights) {
    cnt[h] += 1;
  }

  let idx = 0; let ans = 0;
  for (let i = 1; i <= maxNumber; i += 1) {
    for (let j = 1; j <= cnt[i]; j += 1) {
      if (heights[idx] !== i) {
        ans += 1;
      }
      idx += 1;
    }
  }
  return ans;
};
const heights = [1, 2, 3, 4, 5];

console.log(heightChecker(heights));
