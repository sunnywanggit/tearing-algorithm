const data = [
  {
    id: '1',
    children: [
      {
        id: '11',
        children: [
          {
            id: '111',
          },
          {
            id: '112',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    children: [
      {
        id: '21',
        children: [
          {
            id: '211',
          },
          {
            id: '212',
          },
        ],
      },
    ],
  },
];

let result = [];
let flag = false;
/*
  这道题考察的其实就是递归，让你再递进和回归的时候分别去做一些事情。

  进阶：你的这个 find 函数实际上存在副作用，它改变了函数外部的变量 result 和 flag，现在你把它改造成无副作用的函数（但是不能使用闭包）
 */

const find = (data, findId) => {
  for (const item of data) {
    if (flag) break;
    if (item.id === findId) {
      result.push(item.id);
      flag = true;
    } else if (item.children) {
      result.push(item.id);
      find(item.children, findId);
      if (!flag) result = [];
    }
  }
};

find(data, '2');

const data2 = [
  {
    id: '1',
    children: [
      {
        id: '11',
        children: [
          {
            id: '111',
          },
          {
            id: '112',
          },
        ],
      },
    ],
  },
];

const find2 = (data, findId) => {
  if (!data.length) return [];
  // eslint-disable-next-line no-unreachable-loop
  for (const child of data) {
    if (child.id === findId) {
      return child.id;
    }
    return find2(child.children, findId);
  }
};

console.log(find2(data2, 111));
