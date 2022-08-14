const obj = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
      ],
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] },
      ],
    },
  ],
};
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//   <a></a>
// </span>
// <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>
