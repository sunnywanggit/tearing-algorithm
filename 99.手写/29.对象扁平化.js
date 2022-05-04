const isObject = (target) => typeof target === 'object' && target !== null;

const flatten = (obj) => {
  const result = {};
  const stack = [];

  function convert(obj) {
    for (const key in obj) {
      if (String(Number(key)) === 'NaN') {
        stack.push(key);
      } else {
        stack.push(`[${key}]`);
      }
      if (isObject(obj[key])) {
        convert(obj[key]);
      } else {
        const stackStr = stack.join('.');
        result[stackStr] = obj[key];
        stack.pop();
      }
    }
  }
  convert(obj);
  return result;
};

const obj = {
  a: {
    b: 1,
    c: [0, { d: 1 }],
  },
};

console.log(flatten(obj));
