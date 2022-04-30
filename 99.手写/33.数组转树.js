const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
];

/**
 * 转换方法，递归实现
 *
 */
const arrToTree = (arr, pid) => {
  const result = [];
  const getChildren = (arr, result, pid) => {
    for (const item of arr) {
      if (item.pid === pid) {
        const newItem = { ...item, children: [] };
        result.push(newItem);
        getChildren(arr, newItem.children, newItem.id);
      }
    }
  };
  getChildren(arr, result, pid);
  return result;
};

/**
 * 主要思路是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储
 * 时间复杂度：O(2n) （出现了两次循环）
 * 空间复杂度：O(n) （需要Map把数据存储起来）
 */
// function arrayToTree(items) {
//   const result = []; // 存放结果集
//   const itemMap = {};
//
//   // 先转成map存储
//   for (const item of items) {
//     itemMap[item.id] = { ...item, children: [] };
//   }
//
//   for (const item of items) {
//     const id = item.id;
//     const pid = item.pid;
//     const treeItem = itemMap[id];
//     if (pid === 0) {
//       result.push(treeItem);
//     } else {
//       if (!itemMap[pid]) {
//         itemMap[pid] = {
//           children: [],
//         };
//       }
//       itemMap[pid].children.push(treeItem);
//     }
//   }
//   return result;
// }

/**
 * 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。
 * 不同点在遍历的时候即做Map存储,有找对应关系。性能会更好。
 *
 * 时间复杂度：o(n)
 * 空间复杂度：o(n)
 */
// function arrayToTree(items) {
//   const result = []; // 存放结果集
//   const itemMap = {};
//   for (const item of items) {
//     const id = item.id;
//     const pid = item.pid;
//
//     if (!itemMap[id]) {
//       itemMap[id] = {
//         children: [],
//       };
//     }
//
//     itemMap[id] = {
//       ...item,
//       children: itemMap[id].children,
//     };
//
//     const treeItem = itemMap[id];
//
//     if (pid === 0) {
//       result.push(treeItem);
//     } else {
//       if (!itemMap[pid]) {
//         itemMap[pid] = {
//           children: [],
//         };
//       }
//       itemMap[pid].children.push(treeItem);
//     }
//   }
//   return result;
// }

console.log(arrayToTree(arr, 0));
