/**
 * 题目：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * @description 双指针解法
 */
const removeNthFromEnd = (head, n) => {
  const pre = new ListNode(0, head);
  let slow = pre;
  let fast = pre;

  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return pre.next;
};
