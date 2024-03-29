/**
 * 要点：递归遍历对象，解决循环引用问题
 *
 * 解决循环引用问题，我们需要一个存储容器存放当前对象和拷贝对象的对应关系
 * （适合用key-value的数据结构进行存储，也就是map），当进行拷贝当前对象的时候
 * 我们先查找存储容器是否已经拷贝过当前对象，如果已经拷贝过，那么直接把返回，没有的话则是继续拷贝。
 */

const isObject = (obj) => typeof obj === 'object' && obj !== null;

const deepClone = function (target) {
  // 防止循环引用
  const map = new Map();
  if (!isObject(target)) return target;

  function clone(target) {
    if (isObject(target)) {
      //  加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
      const cloneTarget = (Array.isArray(target) || Object.prototype.toString.call(target) === '[object Array]') ? [] : {};
      if (map.get(target)) return map.get(target);
      for (const key in target) {
        map.set(target, cloneTarget);
        // 可以自动跳过原型属性
        // eslint-disable-next-line no-prototype-builtins
        if (target.hasOwnProperty(key)) {
          cloneTarget[key] = target[key];
        }
      }
      return cloneTarget;
    }
  }

  return clone(target);
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
  empty: null,
  map: new Map(),
  set: new Set(),
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    let t = 0;
    console.log('coder', t++);
  },
  func2(a, b) {
    return a + b;
  },
};

console.log(deepClone(target));
