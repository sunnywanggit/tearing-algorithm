/**
 * 题目：https://leetcode-cn.com/problems/single-number/
 */

/**
 * @description 解法一：异或
 * 异或解法：异或运算满足交换律，a^b^a=a^a^b=b,因此ans相当于nums[0]^nums[1]^nums[2]^nums[3]^nums[4].....
 * 然后再根据交换律把相等的合并到一块儿进行异或（结果为0），然后再与只出现过一次的元素进行异或，
 * 这样最后的结果就是，只出现过一次的元素（0^任意值=任意值）
 */
const singleNumber = function(nums) {
  let ans = nums[0];
  for(let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
};

/**
 * @description 解法二：使用 Set 实现
 */
const singleNumber2 = function (nums) {
  const mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!mySet.has(nums[i])) {
      mySet.add(nums[i]);
      continue;
    }

    if (mySet.has(nums[i])) {
      mySet.delete(nums[i]);
    }
  }

  for (let item of mySet) {
    return  item;
  }
}
