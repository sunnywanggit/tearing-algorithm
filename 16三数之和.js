/*
题目：

给定一个包括  n 个整数的数组  nums  和 一个目标值  target。
找出  nums  中的三个整数，使得它们的和与  target  最接近。返回这三个数的和。
假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

提示：
3 <= nums.length <= 10^3 -10^3 <= nums[i] <= 10^3 -10^4 <= target <= 10^4

思路：

先按照升序排序，然后分别从左往右依次选择一个基础点 i（0 <= i <= nums.length - 3），在基础点的右侧用双指针去不断的找最小的差值。
假设基础点是 i，初始化的时候，双指针分别是：

left：i + 1，基础点右边一位。
right: nums.length - 1 数组最后一位。

然后求此时的和，如果和大于 target，那么可以把右指针左移一位，去试试更小一点的值，反之则把左指针右移。
在这个过程中，不断更新全局的最小差值 min，和此时记录下来的和 res。
最后返回 res 即可。

 */
