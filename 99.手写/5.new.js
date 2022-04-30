/*
创造一个全新的对象
这个对象会被执行 [[Prototype]] 连接，将这个新对象的 [[Prototype]] 链接到这个构造函数.prototype 所指向的对象
这个新对象会绑定到函数调用的 this
如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象
 */

/**
 *
 * new 被调用后做了三件事情：
 * 1.让实例对象可以访问到私有属性
 * 2.让实例对象可以访问构造函数原型 (constructor.prototype) 所在原型链上的属性
 * 3.考虑构造函数有返回值的情况
 */

function myNew(Func, ...args) {
  const fn = Array.prototype.shift.call(arguments); // 取出第一个参数  Func
  if (typeof fn !== 'function') throw `${fn} is not a constructor`;
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args); // 考虑构造函数有返回值的情况，直接执行
  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
}
