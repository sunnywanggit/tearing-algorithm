const twoSum = function (nums, target) {
  const p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    if (nums[p1] + nums[p2] === target) {
      return [p1, p2];
    }
    p2 -= 1;
  }
};

twoSum([2, 7, 11, 15], 9);
