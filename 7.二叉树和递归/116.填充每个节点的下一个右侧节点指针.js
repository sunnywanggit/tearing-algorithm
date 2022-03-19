/**
 * 题目：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */

const connectTwoNode = (node1, node2) => {
  if (node1 === null || node2 === null) return;
  // 前序遍历位置，将传入的两个节点链接
  node1.next = node2;
  // 连接相同父节点的两个字节点
  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node2.left, node2.right);
  // 连接跨越父节点的两个子节点
  connectTwoNode(node1.right, node2.left);
};

const connect = function (root) {
  if (!root) return root;
  connectTwoNode(root.left, root.right);
  return root;
};
