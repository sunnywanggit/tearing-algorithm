const { isObj } = require('../utils');

const underline = (str) => str.replace(/([A-Z])/g, '_$1').toLowerCase();

const obj = {
  aA: {
    bB: 1,
  },
  cC: [
    {
      dD: 2,
      eE: [{ fF: 3 }],
    },
  ],
};

const json2underline = (obj) => {
  const result = {};
  for (const key in obj) {
    const current = obj[key];
    if (Array.isArray(current)) {
      result[underline(key)] = current.map((item) => json2underline(item));
    } else if (isObj(current)) {
      result[underline(key)] = json2underline(obj[key]);
    } else if (obj.hasOwnProperty(key)) {
      result[underline(key)] = obj[key];
    }
  }
  return result;
};

console.log(json2underline(obj));
