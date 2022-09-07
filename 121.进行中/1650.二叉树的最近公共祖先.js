/*
  题目：https://mp.weixin.qq.com/s/njl6nuid0aalZdH5tuDpqQ
 */

/*
  这道题其实不是公共祖先的问题，而是单链表相交的问题，你把parent指针想象成单链表的next指针，题目就变成了：

  给你输入两个单链表的头结点p和q，这两个单链表必然会相交，请你返回相交点。
 */
const lowestCommonAncestor = (p, q) => {
  // 施展链表双指针技巧
  let a = p;
  let b = q;
  while (a !== b) {
    // a 走一步，如果走到根节点，转到 q 节点
    if (a == null) a = q;
    else a = a.parent;
    // b 走一步，如果走到根节点，转到 p 节点
    if (b == null) b = p;
    else b = b.parent;
  }
  return a;
};
