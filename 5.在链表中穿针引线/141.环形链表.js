/**
 * 题目：判断链表中是否有环
 * 地址：https://leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * @description 快慢指针
 * 解题思路：使用快慢指针,两个指针在初始化的时候都指向头节点，然后快指针每次走2不，慢指针每次走1步
 *          这要这个链表有环，那么他们始终有相遇的一刻
 */
const hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};
