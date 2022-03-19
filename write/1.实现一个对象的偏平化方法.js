/**
 * 题目：对象扁平化
 * 公司：阿里
 */
const obj = {
  a: {
    b: 1,
    c: 2,
    d: {e: 5}
  },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
}

// 偏平化返回的结果如下

// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function isObject(val) {
  return typeof val === "object" && val !== null;
}

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}

const obj1 = {
  c: 3
}

function flatten1(obj) {
  if(!isObject(obj)) return;
  const result = {};

  const transform = (currentObj, prefix) => {
    if(isObject(currentObj)) {
      if(Array.isArray(currentObj)) {

      } else {
        for (let key in currentObj) {
          transform(result[key], `${prefix}${prefix ? '.' : ''}${key}`)
        }
      }
    } else {
      result[prefix] = currentObj;
    }
  }
  transform(obj, "");
  return result;
};

console.log(flatten1(obj1));


