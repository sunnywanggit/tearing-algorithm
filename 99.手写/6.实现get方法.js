/**
 * 题目：实现 lodash 中的 get 方法
 */

/**
 * @description 将链式字符串转为数组
 * @param {string} chain 链式字符串
 */
const transformChainToArray = (chain) => {
  if (Array.isArray(chain)) return chain;
  return chain.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * @description 从对象中根据路径取值
 * @param {Object} obj 对象
 * @param {string} path 路径
 * @param {any} defaultValue 默认值
 */
const get = (obj, path, defaultValue) => {
  if (!obj) return defaultValue;
  let result = { ...obj };
  const chainArr = transformChainToArray(path);
  for (let i = 0; i < chainArr.length; i++) {
    let key = chainArr[i];
    if (!key) return defaultValue;
    result = result[key]
  }
  return result;
}

const obj = { a: { b: { c: [1,2,3] } } }

console.log(get(obj, 'a.b.c[0]'))
