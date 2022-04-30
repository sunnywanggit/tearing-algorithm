// 这个是我自己的比较笨拙的做法

const searchRange = function (nums, target) {
  let first = -1;
  let last = -1;
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const item = nums[i];
    if (item === target) {
      if (first === -1) {
        first = i;
      } else if (last === -1) {
        last = i;
      }
    }
  }
  return first === -1 ? [first, last] : [first, last === -1 ? first : last];
};
