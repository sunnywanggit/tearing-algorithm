/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

const deleteDuplicates = function (head) {
  let cur = head;
  while (cur && cur.next) {
    const next = cur.next;
    if (cur.val === next.val) {
      cur.next = next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
