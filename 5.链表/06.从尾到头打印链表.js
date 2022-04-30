/*
  题目：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */

// const reverse = (head) => {
//   if (!head || !head.next) return head;
//   const last = reverse(head.next);
//   head.next.next = head.next;
//   head.next = null;
//   return last;
// };
// const reversePrint = function (head) {
//   const res = [];
//   const last = reverse(head);
//   let cur = last;
//   while (cur.next) {
//     res.push(last.val);
//     cur = cur.next;
//   }
//   return res;
// };

const reversePrint = function (head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
};
