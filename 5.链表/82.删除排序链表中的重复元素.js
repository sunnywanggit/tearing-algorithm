/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */

// todo 这个下来画个图好好思考一下吧
const deleteDuplicates = function (head) {
  // 定义一个预先节点
  const pre = new ListNode(undefined, head);
  let slow = pre;
  let fast = pre.next;
  while (fast && fast.next) {
    const next = fast.next;
    let isDuplicate = false;
    if (fast.val = next.val) {
      fast.next = next.next;
      isDuplicate = true;
    } else {
      if(isDuplicate) {
        slow.next = fast.next;
      } else {
        slow = slow.next;
      }
      fast = fast.next;
    }
  }
  return pre;
};

const head = [1,2,3,3,3,4,4,5]
