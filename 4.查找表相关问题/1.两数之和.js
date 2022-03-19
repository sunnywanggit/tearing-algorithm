/**
 * 题目：https://leetcode-cn.com/problems/two-sum/
 *
 * 方法一：排序后，使用双索引对撞。O(nlogn) + O(n) = O(nlogn) 注意：使用这种方式需要记住排序前的索引
 *
 * 方法二：查找表。将所有的元素放入查找表，之后对于每一个元素a，查找 target-a 是否存在就可以了
 *       但是需要注意的是，我们不能在一开始就将所有的元素都放入，防止后面的元素覆盖前面的元素的情况发生
 *       最终的思路是这样的：我们遍历到第 i 个的时候，先看看之前的查找表中有没有我们需要的值，没有的话
 *       再将 i 放入查找表中，这样即使发生了覆盖也不会有任何的问题
 */

// 时间复杂度 O(n) 空间复杂度 O(n) 因为我们使用了查找表，它可能把所有的元素都放进去
const twoSum = function (nums, target) {
  const record = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const complete = target - nums[i];
    if (record.has(complete)) {
      return [record.get(complete), i];
    }
    record.set(nums[i], i);
  }
  throw new Error('no value');
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
