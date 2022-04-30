/*
  题目：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof

  题解：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
 */

// todo 这个有空了处理一下
const traverse = (A, B) => {
  if (B && A.val === B.val) {
    return true;
  }
  traverse(A.left, B.left);
  traverse(A.right, B.right);
};

const isSubStructure = function (A, B) {
  if (!A && !B) return true;
  if (!A && B) return false;
  return traverse(A, B);
};
