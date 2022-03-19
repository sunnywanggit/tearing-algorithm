/**
 * 题目：https://leetcode-cn.com/problems/reverse-linked-list/
 */

/**
 * @description 迭代实现(迭代实现的好处就是简单，但问题是需要考虑的细节问题很多，反而容易写错）
 */
// const reverseList = function (head) {
//   // 上一个节点
//   let pre = null;
//   // 当前节点
//   let cur = head;
//   // 当前节点存在才继续往后取，避免 null.next 出现
//   while (cur) {
//     // 暂存下一个节点
//     const next = cur.next;
//     // 先将 cur.next 指向 pre，进行一个节点的反转
//     cur.next = pre;
//     // 将 pre 指向当前的 cur
//     pre = cur;
//     // cur 指向 next
//     cur = next;
//   }
//   return pre;
// };

/**
 * @description 使用递归来进行反转
 * todo 算法的思路没有问题，但是用例就是跑步过去，这个需要下来构建一下链表，然后本地跑一下
 */
const reverse = function (head) {
  if (!head || !head.next) return head;
  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
