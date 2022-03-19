/**
 * 题目：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

/**
 * @description 普通思路实现
 */
// var mergeTwoLists = function(list1, list2) {
//   let pre = new ListNode(0)
//   let cur = pre;
//   while(list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       cur.next = list1;
//       cur = cur.next;
//       list1 = list1.next;
//     } else {
//       cur.next = list2;
//       cur = cur.next;
//       list2 = list2.next;
//     }
//   }

//   if (list1 === null) {
//     cur.next = list2;
//     return pre.next;
//   }

//   if (list2 === null) {
//     cur.next = list1;
//     return pre.next;
//   }

//   return pre.next;
// };

/**
 * @description 递归思路实现
 * 题解：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/hua-jie-suan-fa-21-he-bing-liang-ge-you-xu-lian-bi/
 */
// const mergeTwoLists = function (list1, list2) {
//   if (list1 === null) return list2;
//   if (list2 === null) return list1;
//   if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   }
//   list2.next = mergeTwoLists(list1, list2.next);
//   return list2;
// };

/**
 * @description 迭代解法
 */
const mergeTwoLists = (list1, list2) => {
  const dummyHead = new ListNode(0);
  let tail = dummyHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 === null ? list2 : list1;
  return dummyHead.next;
};
