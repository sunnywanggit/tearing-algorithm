/*
两个数组的交集 给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

解题思路：
为两个数组分别建立 map，用来存储 num -> count 的键值对，统计每个数字出现的数量。
然后对其中一个 map 进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的那个数量（比如数组 1 中出现了 1 次，
数组 2 中出现了 2 次，那么交集应该取 1 次），push 到结果数组中即可。
 */
