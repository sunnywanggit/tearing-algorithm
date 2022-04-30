/**
 * 题目：链表的中间节点
 */

/**
 * @description 快慢指针
 * 解题思路：使用快慢指针,两个指针在初始化的时候都指向头节点，然后快指针每次走2不，慢指针每次走1步
 * 这样当当快指针为 null 的时候慢指针就恰好到达了中间的位置
 */
const middleNode = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
