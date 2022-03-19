/**
 * 题目：
 * 1.计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 */

const s1 = [5,2];
const s2 = [4,9];
const s3 = [3,6];

const getIntersection = (...args) => {
  const arr = [...args];
  let len = arr.length;
  for(let i=0; i<len; i++) {
    arr.sort((a,b)=>a-b);
    for(let j = arr[i][0]; j<=arr[i][1]; j++) {

    }
  }
}

getIntersection(s1, s2, s3)


// [4, 5]
