const searchRange = (nums, target) => {
  let L = nums.indexOf(target) || -1;
  let R = L;
  while (nums[L + 1] === target) {
    R = L + 1;
    L += 1;
  }
  return [nums.indexOf(target), R];
};

const nums = [5, 7, 7, 8, 10];
const target = 5;

console.log(searchRange(nums, target));
