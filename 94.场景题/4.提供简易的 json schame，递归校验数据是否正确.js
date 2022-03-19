const rules = {
  a: 'String',
  b: {
    c: 'Number',
  },
  d: ['Number', 'Boolean', { m: 'Number', n: 'String' }],
};

const target = {
  a: 'hello',
  b: {
    c: 1,
  },
  d: [1, true, { m: 1, n: '2' }],
};

let result = true;
const check = (target, rules) => {
  for (const key in target) {
    // eslint-disable-next-line no-prototype-builtins
    if (target.hasOwnProperty(key)) {
      if (typeof target[key] !== 'object') {
        // eslint-disable-next-line valid-typeof
        if (typeof target[key] !== rules[key].toLocaleLowerCase()) result = false;
      } else {
        check(target[key], rules[key]);
      }
    }
  }
  return result;
};

console.log(check(target, rules));
