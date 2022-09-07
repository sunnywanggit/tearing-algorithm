function query(data) {
  this.data = data;

  this.where = function (predicate) {
    this.data = this.data.filter((item) => predicate(item));
    return this;
  };

  this.orderBy = function (key, desc) {
    if (desc) {
      this.data.sort((a, b) => b[key] - a[key]);
    } else {
      this.data.sort((a, b) => a[key] - b[key]);
    }
    console.log('order', this.data);
    return this;
  };

  this.groupBy = function (key) {
    const results = [];
    function getGroup(name) {
      const result = [];
      for (const item of this.data) {
        if (item[key] === name) {
          result.push(item);
        }
      }
      return result;
    }
    const map = [];
    for (const item of this.data) {
      if (!map.includes(item[key])) {
        results.push(getGroup(item[key]));
        map.push(item[key]);
      }
    }
    this.data = results;
    return this;
  };

  this.execute = function () {
    return this.data;
  };

  return this;
}

const data = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hangzhou' },
];

query(data)
  .where((item) => item.age > 18)
  .orderBy('age');
// .groupBy('city')
// .execute();

// 结果返回
// [
//   [
//     { name: 'baz', age: 19, city: 'hangzhou' },
//     { name: 'bar', age: 24, city: 'hangzhou' },
//   ],
//   [
//     { name: 'fiz', age: 22, city: 'shanghai' },
//   ],
// ];
