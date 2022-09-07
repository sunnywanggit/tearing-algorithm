/**
 * 题目：https://leetcode-cn.com/problems/range-sum-query-immutable/
 */
// const NumArray = function (nums) {
//   this.arr = nums;
// };
//
// NumArray.prototype.sumRange = function (left, right) {
//   return this.arr.slice(left, right + 1).reduce((pre, cur) => pre + cur, 0);
// };

/*
 这样，可以达到效果，但是效率很差，因为 sumRange 方法会被频繁调用，而它的时间复杂度是 O(N)，其中 N 代表 nums 数组的长度。

 这道题的最优解法是使用前缀和技巧，将 sumRange 函数的时间复杂度降为 O(1)，说白了就是不要在 sumRange 里面用 for 循环，咋整？

 核心思路是我们 new 一个新的数组 preSum 出来，preSum[i] 记录 nums[0..i-1] 的累加和

 题解：https://labuladong.gitee.io/algo/2/19/22/
 */

// 输入一个数组，构造前缀和
const NumArray = function (nums) {
  // preSum[0] = 0,便于计算累加和
  this.preSum = [0];
  // 计算 nums 的累加和
  for (let i = 1; i < nums.length + 1; i += 1) {
    this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
  }
  console.log('111', nums);
  console.log('222', this.preSum);
};

// 查询闭区间 [left,right] 的累加和
NumArray.prototype.sumRange = function (left, right) {
  // todo 这里我想的还不是特别明白
  return this.preSum[right + 1] - this.preSum[left];
};

const xx = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(xx.sumRange(2, 5));
// console.log(xx.sumRange(0, 2));
