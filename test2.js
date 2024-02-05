let twoSumTarget = function (nums, start, target) {
  const res = [];
  nums.sort((a, b) => a - b);

  let p1 = start;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    const sum = nums[p1] + nums[p2];
    const left = nums[p1];
    const right = nums[p2];
    if (sum < target) {
      while (p1 < p2 && nums[p1] === left) p1 += 1;
    }
    if (sum > target) {
      while (p1 < p2 && nums[p2] === right) p2 -= 1;
    }
    if (sum === target) {
      res.push([nums[p1], nums[p2]]);
      while (p1 < p2 && nums[p1] === left) p1 += 1;
      while (p1 < p2 && nums[p2] === right) p2 -= 1;
    }
  }
  return res;
};

let threeSum = function (nums, start, target) {
  // 数组得排个序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  // 穷举 threeSum 的第一个数
  for (let i = start; i < n; i += 1) {
    // 对 target - nums[i] 计算 twoSum
    let tuples = twoSumTarget(nums, i + 1, target - nums[i]);
    // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
    for (let j = 0; j < tuples.length; j += 1) {
      let tuple = tuples[j];
      tuple.push(nums[i]);
      res.push(tuple);
    }
    // 跳过第一个数字重复的情况，否则会出现重复结果
    while (i < n - 1 && nums[i] === nums[i + 1]) i += 1;
  }
  return res;
};

let fourSum = function (nums, target) {
  // 数组得排个序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  for (let i = 0; i < n; i += 1) {
    // 对 target - nums[i] 计算 twoSum
    let tuples = threeSum(nums, i + 1, target - nums[i]);
    // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
    for (let j = 0; j < tuples.length; j += 1) {
      let tuple = tuples[j];
      tuple.push(nums[i]);
      res.push(tuple);
    }
    // 跳过第一个数字重复的情况，否则会出现重复结果
    while (i < n - 1 && nums[i] === nums[i + 1]) i += 1;
  }
  return res;
};
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

console.log(fourSum(nums, target));
