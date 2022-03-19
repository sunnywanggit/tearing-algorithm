/**
 * 题目：https://leetcode-cn.com/problems/3sum/
 *
 * 题解：https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
 */

const threeSum = function (nums) {
  const ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i += 1) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L += 1; // 去重
        while (L < R && nums[R] === nums[R - 1]) R -= 1; // 去重
        L += 1;
        R -= 1;
      } else if (sum < 0) {
        L += 1;
      } else if (sum > 0) {
        R -= 1;
      }
    }
  }
  return ans;
};

const three = (nums) => {
  const ans = [];
  const len = nums.length;
  if (!nums || nums.length < 3) return ans;
  nums.sor((a, b) => a - b);
  for (let i = 0; i < len; i += 1) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L += 1;
        while (L < R && nums[R] === nums[R - 1]) R -= 1;
        L += 1;
        R -= 1;
      } else if (sum < 0) {
        L += 1;
      } else if (sum > 0) {
        R -= 1;
      }
    }
  }
};

const nums = [1, 1, -2];
console.log(threeSum(nums));
// [[-1,-1,2],[-1,0,1]]
