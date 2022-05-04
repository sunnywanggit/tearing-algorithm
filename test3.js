const isArithmetic = (root) => {
  const result = [];

  function getAllLeaves(root) {
    if (!root) return false;
    if (!root.left && !root.right) result.push(root.val);
    getAllLeaves(root.left);
    getAllLeaves(root.right);
  }

  function canMakeArithmeticProgression(arr) {
    const len = arr.length;
    if (!len || len < 2) return false;
    arr.sort((a, b) => a - b);
    const number = arr[1] - arr[0];
    for (let i = 1; i < len; i += 1) {
      if (arr[i] - arr[i - 1] !== number) return false;
    }
    return true;
  }
  getAllLeaves(root);
  return canMakeArithmeticProgression(result);
};
