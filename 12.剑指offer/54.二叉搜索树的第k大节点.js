/*
  我的思路是将整个树的所有节点根据二叉搜索树的特点从左到右全部遍历出来放到数组中
  然后从数组中取倒数第二大的数
 */
// const kthLargest = function (root, k) {
//   const result = [];
//
//   function dfs(root) {
//     if (!root) return;
//     dfs(root.left);
//     result.push(root.val);
//     dfs(root.right);
//   }
//   dfs(root);
//   return result.reverse()[k - 1];
// };

const kthLargest = function (root, k) {
  let result;
  function dfs(root) {
    if (!root) return;
    dfs(root.right);
    if (k === 0) return;
    if (k - 1 === 0) result = root.val;
    k -= 1;
    dfs(root.left);
  }
  dfs(root);
  return result;
};
