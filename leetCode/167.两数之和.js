/**
 * 题目：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 注意：不同使用同一个元素、索引是从1开始计算、
 *      如果没有解怎样？保证有解。
 *      如果有多个解怎样？返回任意解。
 *      如何返回多个解，对于返回解的顺序有没有要求
 *
 * 解法一：暴力解法。双层遍历O(n2)，虽然性能不够好，但是仍然是一个可行解
 *             对于O(n2)级别的算法，当数据规模为一万的时候，运行起来就有点慢了
 *
 *  解法二：二分查找。暴力解法没有充分利用原数组的性质——有序。
 *  有序？ 二分搜索？我们可以使用二分搜索来进行提速。
 *  在数组中找到两个数，使得它们的和等于目标值，可以首先固定第一个数，然后寻找第二个数，第二个数等于目标值减去第一个数的差。
 *  利用数组的有序性质，可以通过二分查找的方法寻找第二个数。为了避免重复寻找，在寻找第二个数时，只在第一个数的右侧寻找。
 */

/**
 * @description 解法一： 暴力解法
 */
const twoSum1 = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
        break;
      }
    }
  }
};

/**
 * @description 解法二：二分查找
 * 时间复杂度：O(nlogn)，其中 n 是数组的长度。需要遍历数组一次确定第一个数，时间复杂度是 O(n)O(n)，寻找第二个数使用二分查找，时间复杂度是 O(\log n)O(logn)，因此总时间复杂度是 O(n \log n)O(nlogn)。
 */
const twoSum2 = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = i + 1; // 为了避免重复寻找，在寻找第二个数时，只在第一个数的右侧寻找。
    let r = numbers.length - 1; // [l,r] 区间中查找
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (numbers[mid] + numbers[i] === target) {
        return [i + 1, mid + 1];
      }
      if (numbers[mid] + numbers[i] > target) {
        r = mid - 1;
      }
      if (numbers[mid] + numbers[i] < target) {
        l = mid + 1;
      }
    }
  }
};

/**
 * @description 解法二：对撞指针
 * 时间复杂度： O(n)
 * 空间复杂度：O(1)
 */
const twoSum3 = function (nums, target) {
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    if (nums[p1] + nums[p2] === target) {
      return [p1, p2];
    }
    p2 -= 1;
    if (p1 === p2) {
      p1 += 1;
      p2 = nums.length - 1;
    }
  }
};

/**
 * 解法四：双指针
 * @param 注意边界看条
 */
const twoSum4 = function (nums, target) {
  let p1 = 0;
  let p2 = p1 + 1;
  while (p1 < nums.length) {
    if (nums[p1] + nums[p2] === target) return [p1, p2];
    p2 += 1;
    if (p2 === nums.length) {
      p1 += 1;
      p2 = p1 + 1;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSum3(numbers, target));
