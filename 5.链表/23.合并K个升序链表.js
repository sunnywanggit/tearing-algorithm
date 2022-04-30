/**
 * 题目：https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * todo 更高级的解法后面再看吧，现在看的头疼
 */

/**
 * @description 方法一：逐一合并两个链表
 */
// const mergeTwoList = (list1, list2) => {
//   if (list1 === null) return list2;
//   if (list2 === null) return list1;
//   if (list1.val < list2.val) {
//     list1.next = mergeTwoList(list1.next, list2);
//     return list1;
//   }
//   list2.next = mergeTwoList(list1, list2.next);
//   return list2;
// };
//
// const mergeKLists = (lists) => {
//   if (!lists.length) return null;
//   if (lists.length === 1) return lists[0];
//   let result = mergeTwoList(lists[0], lists[1]);
//   for (let i = 2; i < lists.length; i += 1) {
//     result = mergeTwoList(result, lists[i]);
//   }
//   return result;
// };
