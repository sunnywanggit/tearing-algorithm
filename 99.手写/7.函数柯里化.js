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

function add(a, b, c) {
  return a * b * c;
}

// function curry(func) {
//   const curried = (...args) => {
//     if (args.length < func.length) {
//       return (...rest) => curried(...args, ...rest);
//     }
//     return func(...args);
//   };
//   return curried;
// }

function curry(func) {
  const curried = (...args) => {
    if (args.length < func.length) {
      return (...rest) => curried(...args, ...rest);
    }
    return func(...args);
  };
  return curried;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1)(2)(3));
