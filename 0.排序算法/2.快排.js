
// 对 nums[lo..hi] 进行切分
private static int partition(int[] nums, int lo, int hi) {
  int pivot = nums[lo];
  // 关于区间的边界控制需格外小心，稍有不慎就会出错
  // 我这里把 i, j 定义为开区间，同时定义：
  // [lo, i) <= pivot；(j, hi] > pivot
  // 之后都要正确维护这个边界区间的定义
  int i = lo + 1, j = hi;
  // 当 i > j 时结束循环，以保证区间 [lo, hi] 都被覆盖
  while (i <= j) {
    while (i < hi && nums[i] <= pivot) {
      i++;
      // 此 while 结束时恰好 nums[i] > pivot
    }
    while (j > lo && nums[j] > pivot) {
      j--;
      // 此 while 结束时恰好 nums[j] <= pivot
    }
    // 此时 [lo, i) <= pivot && (j, hi] > pivot

    if (i >= j) {
      break;
    }
    swap(nums, i, j);
  }
  // 将 pivot 放到合适的位置，即 pivot 左边元素较小，右边元素较大
  swap(nums, lo, j);
  return j;
}

const _sort = (nums, lo, hi) => {
  if (lo >= hi) return;
  // 对 nums[lo..hi] 进行切分
  // 使得 nums[lo..p-1] <= nums[p] < nums[p+1..hi]
  const p = partition(nums, lo, hi);

  _sort(nums, lo, p - 1);
  _sort(nums, p + 1, hi);
};

const sort = (nums) => {
  // 为了避免出现耗时的极端情况，先随机打乱
  shuffle(nums);
  // 排序整个数组（原地修改）
  sort(nums, 0, nums.length - 1);
};
