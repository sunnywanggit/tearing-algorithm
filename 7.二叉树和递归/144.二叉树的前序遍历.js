/**
 *题目：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

const preorderTraversal = function (root) {
  const result = [];
  function dfs(root) {
    if (!root) return;
    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return result;
};

// 迭代解法1(使用栈进行迭代）

// const preorderTraversal = function (root) {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];
//   while (stack.length) {
//     const node = stack.pop();
//     if (node) {
//       result.push(node.val); // 根节点值接入到结果中
//       if (node.right) { // 右子树入栈
//         stack.push(node.right);
//       }
//       if (node.left) { // 左子树入栈
//         stack.push(node.left);
//       }
//     }
//   }
//   return result;
// };

// 迭代解法2（直接套用模板解决）
// const preorderTraversal = function (root) {
//   if (!root) return [];
//   let cur = root;
//   const stack = [];
//   const result = [];
//   while (cur || stack.length) {
//     while (cur) { // 根节点和左孩子入栈
//       result.push(cur.val);
//       stack.push(cur);
//       cur = cur.left;
//     }
//     const temp = stack.pop();
//     cur = temp.right;
//   }
//   return result;
// };
