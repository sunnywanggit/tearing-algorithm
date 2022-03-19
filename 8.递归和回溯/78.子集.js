/**
 * 题目：https://leetcode-cn.com/problems/subsets/
 */

/**
 * @description 递归求解
 * 题解：https://mp.weixin.qq.com/s/qT6WgR6Qwn7ayZkI3AineA
 */
const subsets = function (nums) {
  if (!nums.length) return [[]];
  // 把最后一个元素拿出来
  const n = nums.pop();
  // 先通过递归算出前面所有元素的子集
  const result = subsets(nums);
  const len = result.length;
  for (let i = 0; i < len; i += 1) {
    // 然后在之前的结果之上追加
    const temp = [...result[i]];
    temp.push(n);
    result.push(temp);
  }
  return result;
};

const nums = [1, 2];

console.log(subsets(nums));
