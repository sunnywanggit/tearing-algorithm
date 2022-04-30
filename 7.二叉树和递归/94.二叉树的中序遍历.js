/**
 * 题目：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 中序遍历：左->根->右
 */

// 中序遍历，递归解法

let result = [];

const dfs = (root) => {
  if (root === null) return;
  dfs(root.left);
  result.push(root.val);
  dfs(root.right);
};

const inorderTraversal = function (root) {
  result = [];
  dfs(root);
  return result;
};

// 迭代解法2（直接套用模板解决）
// const inorderTraversal = function (root) {
//   if (!root) return [];
//   let cur = root;
//   const stack = [];
//   const result = [];
//
//   while (cur || stack.length) {
//     while (cur) { // 根节点和左孩子入栈
//       result.push(cur.val);
//       cur = cur.left;
//     }
//     const temp = stack.pop();
//     result.push(temp.val);
//     cur = temp.right;
//   }
//   return result;
// };
