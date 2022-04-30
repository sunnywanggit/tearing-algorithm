// todo 这个还是值得思考一下的
const reverse = (head, n) => {
  if (head || head.next) return head;
  if (n === 0) return head;
  const last = reverse(head.next, n - 1);
  head.next.next = head.next;
  head.next = null;
  return last;
};
