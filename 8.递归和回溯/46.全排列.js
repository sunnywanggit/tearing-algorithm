/**
 * 题目：https://leetcode-cn.com/problems/permutations/
 *
 * 题解：https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/
 */

// let result = []; // 用来保存结果
// const used = []; // 用来存储已经用过的数组元素

/**
 * @description 这个函数的主要作用就是用来生成一个排列
 * @param {Array} nums 生成排列的数组
 * @param {number} index 先来我正在处理第几个元素
 * @param {Array} p 我们在递归的过程中找到的一个排列
 */

// var generatorPermutation = function (nums, index, p) {
//   // 递归终止条件,如果p中的排列已经有了 nums 中所有的元素
//   if (index === nums.length) {
//     result.push([...p]);
//     return;
//   }
//
//   for (let i = 0; i < nums.length; i++) {
//     if (!used[i]) {
//       // 将 nums[i] 添加到 p 中
//       p.push(nums[i]);
//       used[i] = true;
//       generatorPermutation(nums, index + 1, p);
//       // 下面两句就是回溯算法回去的过程
//       p.pop();
//       used[i] = false;
//     }
//   }
// };

// const permute = function (nums) {
//   // 初始的时候清空 result
//   result = [];
//   if (nums.length === 0) return result;
//   const p = [];
//   generatorPermutation(nums, 0, p);
//   return result;
// };

// nums 可以理解为[选择列表] choiceList
const backtrack = (nums, track, result) => {
  if (!nums.length) {
    result.push(track);
  } else {
    for (let i = 0; i < nums.length; i += 1) {
      // choice 过程
      const n = nums[i]; // 用变量存起来，一会儿 unChoice 要用
      track.push(n); // 加入决策路径的最后
      nums.splice(i, 1); // 擦除这个选择

      // 进入下一步决策
      backtrack(nums, track, result);

      // unChoice 过程
      nums.splice(i, 0, n);
      track.pop();
    }
  }
};

/**
 * @description 使用回溯模板来解决这个问题
 * 题解：https://mp.weixin.qq.com/s/trILKSiN9EoS58pXmvUtUQ
 */
const permute = function (nums) {
  const result = [];
  const track = [];
  backtrack(nums, track, result);
  return result;
};

console.log(permute([1, 2, 3]));
