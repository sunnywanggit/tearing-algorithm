/**
 * 题目：https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

const detectCycle = function (head) {
  let slow = head;
  let fast = head;
  if (fast == null || fast.next == null) {
    // fast 遇到空指针说明没有环
    return null;
  }
  while (fast && fast.next) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  slow = head;
  while (slow !== fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
