/**
 * 题目：实现原型继承
 */

function Parent() {
  this.name = 'dachui';
}

Parent.prototype.age = function () {
  console.log('age is 18');
}

function Child() {}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const c1 = new Child();
const p1 = new Parent();
