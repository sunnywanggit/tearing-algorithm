/*
  题目：https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

const getIntersectionNode = (headA, headB) => {
  const map = new WeakMap();
  while (headA) {
    map.set(headA, headA);
    headA = headA.next;
  }
  while (headB) {
    if (map.get(headB)) {
      return map.get(headB);
    }
    headB = headB.next;
  }
  return null;
};
