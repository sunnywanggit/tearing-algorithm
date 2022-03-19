/**
 * 题目：实现 add(1)(2)(3) 要求实现定参和不定参两种情况
 * 1.首先需要知道原来的函数参数有几个 fn.length
 * 2.每次需要返回一个新的函数
 * 3.每次函数执行的时候都要把参数收集起来[...args]
 * 4.终止条件，当 args.length === fn.length 的时候，
 */

/**
 * @description 暴力解法 
 */
// const add = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     }
//   }
// }

// todo 这个我不是特别理解
// 题解：https://www.yuque.com/cuggz/interview/pkg93q#GxWXw
var add = function (m) {
  var temp = function (n) {
    return add(m + n);
  }
  temp.toString = function () {
    return m;
  }
  return temp;
};
console.log(add(3)(4)(5)); // 12
console.log(add(3)(6)(9)(25)); // 43
