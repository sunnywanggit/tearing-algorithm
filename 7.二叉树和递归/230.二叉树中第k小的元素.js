/**
 * 题目：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 */

let len = 0;
const kthSmallest = function(root, k) {
  if(!root) return null;
  kthSmallest(root.left, k);
  len += 1;
  if(len === k) return root.val;
  kthSmallest(root.right, k);
};

