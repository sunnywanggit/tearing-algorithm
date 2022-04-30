/*
  题目：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */

/*
 双指针，让一个节点先往前走 k 步，然后两个节点一起走
 当第二个节点走到末尾的时候，第一个节点指向的就是倒数第 k 个节点
 */
const getKthFromEnd = function (head, k) {
  let l = head;
  let r = head;
  while (k) {
    r = r.next;
    k -= 1;
  }
  while (r) {
    r = r.next;
    l = l.next;
  }
  return l;
};
