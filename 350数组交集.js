/*
两个数组的交集 给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

解题思路一：
为两个数组分别建立 map，用来存储 num -> count 的键值对，统计每个数字出现的数量。
然后对其中一个 map 进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的那个数量（比如数组 1 中出现了 1 次，
数组 2 中出现了 2 次，那么交集应该取 1 次），push 到结果数组中即可。

解题思路二：
可以使用排序+双指针
 */


/**
 * @description 求交集
 * @param {Array} nums1 数组1
 * @param {Array} nums2 数组2
 */
let intersect = function (nums1, nums2) {
  let map1 = makeCountMap(nums1)
  let map2 = makeCountMap(nums2)
  let res = []
  for (let num of map1.keys()) {
    const count1 = map1.get(num)
    const count2 = map2.get(num)

    if (count2) {
      const pushCount = Math.min(count1, count2)
      for (let i = 0; i < pushCount; i++) {
        res.push(num)
      }
    }
  }
  return res
}

/**
 * @description 求 num -> count 的键值对
 * @param {Array} nums 数组
 */
function makeCountMap(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let count = map.get(num)
    if (count) {
      map.set(num, count + 1)
    } else {
      map.set(num, 1)
    }
  }
  return map
}
