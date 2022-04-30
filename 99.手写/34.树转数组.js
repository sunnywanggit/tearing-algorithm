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

const treeToArr = (tree) => {
  const result = [];
  const xxx = (tree, result) => {
    for (const item of tree) {
      const newItem = { ...item };
      newItem.children && delete newItem.children;
      result.push(newItem);
      if (item.children) {
        xxx(item.children, result);
      }
    }
  };
  xxx(tree, result);
  return result;
};

console.log(treeToArr(tree));
