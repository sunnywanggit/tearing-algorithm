/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

const deleteDuplicates = function (head) {
  const pre = head;
  let last = head;
  while (last && last.next) {
    const next = last.next;
    if (last.val === next.val) {
      last.next = next.next;
    } else {
      last = last.next;
    }
  }
  return head;
};
