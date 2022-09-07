const majorityElement = function (nums) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i += 1) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const [key, value] of map.entries()) {
    if (value > len / 2) return key;
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
