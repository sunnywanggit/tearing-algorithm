/**
 * 题目：https://leetcode-cn.com/problems/permutations/
 *
 * 题解：https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/
 */

/**
 * @description 使用回溯模板来解决这个问题
 * 题解：https://mp.weixin.qq.com/s/trILKSiN9EoS58pXmvUtUQ
 */
const permute = function (nums) {
  const used = []; // 用来存储已经用过的元素
  const result = [];
  const track = [];

  // nums 可以理解为[选择列表] choiceList
  const backtrack = (nums) => {
    if (track.length === nums.length) {
      result.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i += 1) {
      if (used[i]) continue;
      // choice 过程
      track.push(nums[i]); // 加入决策路径的最后
      used[i] = true; // choice 过程

      // 进入下一步决策
      backtrack(nums);

      // unChoice 过程
      used[i] = false;
      track.pop();
    }
  };

  backtrack(nums);
  return result;
};

console.log(permute([1, 2, 3]));
