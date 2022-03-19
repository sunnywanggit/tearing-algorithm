/**
 * 题目：返回倒数第k个节点
 */

/**
 * @description 双指针解法
 * 思路：快慢指针
 * 设有两个指针 slow 和 fast，初始时均指向头结点。
 * 首先，先让 fast 沿着 next 移动 k 次。此时，fast 指向第 k+1个结点，slow 指向头节点，两个指针的距离为 k 。
 * 然后，同时移动 slow 和 fast ，直到 fast 指向空，此时 slow 即指向倒数第 k 个结点。
 */
const kthToLast = function (head, k) {
  let slow = head;
  let fast = head;

  // eslint-disable-next-line no-param-reassign,no-plusplus
  while (k--) { // 将 fast 指针移动 k 次
    fast = fast.next;
  }
  while (fast !== null) { // 同时移动，直到 fast == null
    fast = fast.next;
    slow = slow.next;
  }
  return slow.val;
};
