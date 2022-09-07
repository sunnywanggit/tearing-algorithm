const tree = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1,
      },
    ],
  },
];

// 将上面的树形结构转化为下面的数组

// const result = [
//   {
//     id: 1,
//     text: '节点1',
//     parentId: 0, // 这里用0表示为顶级节点
//   },
//   {
//     id: 2,
//     text: '节点1_1',
//     parentId: 1, // 通过这个字段来确定子父级
//   },
// ];

function treeToArr(tree) {
  const result = [];
  const len = tree.length;
  if (!len) return result;
  for (const item of tree) {
    if (Array.isArray(item.children)) {
      const newItem = { ...item };
      delete newItem.children;
      result.push(newItem);
      result.push(...treeToArr(item.children));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(treeToArr(tree));
