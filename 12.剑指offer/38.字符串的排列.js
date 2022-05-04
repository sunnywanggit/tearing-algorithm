let used = [];

const backtrack = (nums, track, result) => {
  if (track.length === nums.length) {
    result.push(track.join(''));
    return;
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (used[i]) continue;
    track.push(nums[i]);
    used[i] = true;
    backtrack(nums, track, result);
    used[i] = false;
    track.pop();
  }
};

const permutation = (nums) => {
  used = [];
  const result = [];
  const track = [];
  backtrack(nums.split(''), track, result);
  return [...new Set(result)];
};

console.log(permutation('aab'));
