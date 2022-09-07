function myNew(constructor, ...args) {
  // 1. 让实例可以访问到构造函数原型上的属性
  const obj = Object.create(constructor.prototype);
  // 2. 让实例可以访问到构造函数的私有属性
  const res = constructor.call(obj, ...args);
  // 3. 考虑构造函数有返回值的情况
  return res && (typeof res === 'object') ? res : obj;
}

// 用法如下：
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.age);
};

const p1 = myNew(Person, 'lihua', 18);
console.log(p1.name);
console.log(p1);
p1.say();
