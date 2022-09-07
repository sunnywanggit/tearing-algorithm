/**
 * 题目：手写 instanceof
 *
 * instanceof 判断左边的原型是否存在于右边的原型链中。
 *
 * 实现思路：逐层往上查找原型，如果最终的原型为 null ，证明不存在原型链中，否则存在。
 */

const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || !left) return false; // 基础类型一律为 false
  let proto = Object.getPrototypeOf(left); // 获取对象的原型
  while (true) {
    if (!proto) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(myInstanceof(auto, Car));
// expected output: true

// console.log(auto instanceof Object);
// expected output: true
