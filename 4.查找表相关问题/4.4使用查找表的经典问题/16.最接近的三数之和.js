/**
 * 题目：https://leetcode-cn.com/problems/3sum-closest/
 *
 * 题解：https://leetcode-cn.com/problems/3sum-closest/solution/hua-jie-suan-fa-16-zui-jie-jin-de-san-shu-zhi-he-b/
 */

const threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a -b);
  let ans = nums[0] + nums[1] + nums[2]
  const len = nums.length;

  for(let i = 0; i <len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }
      if (sum > target) {
        R--
      } else if (sum < target){
        L++
      } else {
        return ans;
      }
    }
  }

  return ans;
};
let nums = [-1,2,1,-4]
let target = 1

console.log(threeSumClosest(nums, target))
