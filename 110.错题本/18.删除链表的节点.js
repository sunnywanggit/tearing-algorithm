/*
  题目：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */
const deleteNode = function (head, val) {
  if (!head) return null;
  if (head.val === val) return head.next;
  let pre = head;
  let cur = head.next;
  while (cur && cur.val !== val) {
    pre = cur;
    cur = cur.next;
  }
  if (cur) {
    pre.next = cur.next;
  }
  return head;
};
