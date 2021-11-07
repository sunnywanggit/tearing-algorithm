/*
 题目：https://leetcode-cn.com/problems/swap-nodes-in-pairs/

 思路：
 可以通过递归的方式实现两两交换链表中的节点。

 递归的终止条件是链表中没有节点，或者链表中只有一个节点，此时无法进行交换。

 如果链表中至少有两个节点，则在两两交换链表中的节点之后，原始链表的头节点变成新的链表的第二个节点，原始链表的第二个节点变成新的链表的头节点。
 链表中的其余节点的两两交换可以递归地实现。在对链表中的其余节点递归地两两交换之后，更新节点之间的指针关系，即可完成整个链表的两两交换。

 用 one 表示原始链表的头节点，即的链表的第二个节点，用 two 表示新的链表的头节点， 即始链表的第二个节点， 则原始链表中的其余节点的头节点是 three。
 令 one.next = swapPairs(two.next)，表示将其余节点进行两两交换，交换后的新的头节点为 head 的下一个节点。
 然后令 two.next = one，即完成了所有节点的交换。最后返回新的链表的头节点 two。
 */

const swapPairs = function (head) {
  if (!head || !head.next) return head

  const one = head
  const two = one.next
  const three = two.next

  two.next = one
  one.next = swapPairs(three)

  return two
};

