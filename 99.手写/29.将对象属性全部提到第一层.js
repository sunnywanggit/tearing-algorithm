const result = {};
const stack = [];

function convert(obj) {
  for (const key in obj) {
    if (parseInt(key, 10).toString() === 'NaN') {
      stack.push(key);
    } else {
      stack.push(`[${key}]`);
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      convert(obj[key]);
    } else {
      const stackStr = stack.join('.');
      result[stackStr] = obj[key];
      stack.pop();
    }
  }
  return result;
}

const obj = {
  a: {
    b: 1,
    c: [0, { d: 1 }],
  },
};

console.log(convert(obj));
