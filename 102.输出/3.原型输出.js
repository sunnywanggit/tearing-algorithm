Function.prototype.a = 'function';
Object.prototype.a = 'object';

function Person() {}
const child = new Person();
console.log(child.a);
console.log(Person.a);
