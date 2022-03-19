/**
 *
 * new 被调用后做了三件事情：
 * 1.让实例对象可以访问到私有属性
 * 2.让实例对象可以访问构造函数原型 (constructor.prototype) 所在原型链上的属性
 * 3.考虑构造函数有返回值的情况
 */

function myNew(Func, ...args) {
  let fn = Array.prototype.shift.call(arguments) // 取出第一个参数  Func
  if (typeof fn !== 'function') throw `${fn} is not a constructor`
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args) // 考虑构造函数有返回值的情况，直接执行
  let isObject = typeof res === 'object' && res !== null
  let isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
