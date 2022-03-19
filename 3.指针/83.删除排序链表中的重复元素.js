/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

/**
 * @description 快慢指针解法
 */
const deleteDuplicates = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  while (fast !== null) {
    if (slow.val !== fast.val) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }
  // 断开与后面链表的链接
  slow.next = null;
  return head;
};
