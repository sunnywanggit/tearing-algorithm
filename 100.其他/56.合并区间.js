/**
 * 题目：https://leetcode-cn.com/problems/merge-intervals/
 */

/**
 * @description 双指针
 * 题解：https://leetcode-cn.com/problems/merge-intervals/solution/merge-intervals-by-ikaruga/
 */
const merge = function (intervals) {
  const result = [];
  const len = intervals.length;
  // 首先对数组进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < len;) {
    let t = intervals[i][1];
    let j = i + 1;
    while (j < len && intervals[j][0] <= t) {
      t = Math.max(t, intervals[j][1]);
      j += 1;
    }
    result.push([intervals[i][0], t]);
    i = j;
  }
  return result;
};

const intervals = [[1, 3], [2, 6]];

console.log(merge(intervals));
