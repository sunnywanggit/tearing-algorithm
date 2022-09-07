/*
  题目：https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 */
const getIntersectionNode = function (headA, headB) {
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

// 8
// 4 1 8 4 5
