/**
 * 题目：oNode1和oNode2在同一文档中，且不会为相同的节点，寻找这两个节点最近的一个共同父节点，可以包括节点本身。
 */

/**
 * 思路：可能的情况有以下几
 * 1.两个节点同级，他们的直接父节点就是要找的目标节点
 * 2.两个节点互为祖先关系
 * 3.两个节点没有任何关系
 */

/**
 * @description 递归实现版本
 */
// const findParent = (node1, node2) => {
//   // 判断情况1和2
//   if (node1.contains(node2)) {
//     return node1;
//   // 判断情况1和2
//   } if (node2.contains(node1)) {
//     return node2;
//   }
//   // 判断情况3，从其中一个节点往上查找，会找到一个共同的祖先节点
//   return findParent(node1.parentNode, node2);
// };

/**
 * @description 迭代实现版本
 * 递归实现很好理解，仅仅通过遍历能不能实现呢？其实往往递归的问题都可以通过遍历去解决
 */
const findParent = (node1, node2) => {
  // 这里用oNode2是一样的
  // 如果某个节点包含另一个节点，直接返回，否则不断往上查找
  while (!node1.contains(node2)) {
    node1 = node1.parentNode;
  }

  return node1;
};
