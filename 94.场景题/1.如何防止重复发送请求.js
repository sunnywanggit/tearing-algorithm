/**
 * 题目：https://mp.weixin.qq.com/s/-7fxO1cdQd48GDV7prSYOg
 *
 * 问题：业务需求中，经常有只需要请求一次，以防止用户重复点击行为导致触发重复请求。
 * 传递请求方法（执行后返回promise），返回一个新方法。连续触发时，只执行一次。
 */

// 示例
let count = 1;

// eslint-disable-next-line no-promise-executor-return
const promiseFunction = () => new Promise((resolve) => setTimeout(() => { resolve(count += 1); }));

function firstPromise(promiseFunction) {
  let p;
  return function (...args) {
    // 请求的实例，已存在意味着正在请求中，直接返回实例，不触发新的请求
    // 否则发送请求，且在finally时将p置空，那么下一次请求可以重新发起
    // eslint-disable-next-line no-return-assign
    return p || (p = promiseFunction.apply(this, args).finally(() => (p = null)));
  };
}

const firstFn = firstPromise(promiseFunction);

firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
