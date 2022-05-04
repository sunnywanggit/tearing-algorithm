/*
  new Duck().go('100').sing('hello'); //打印出 100,hello
 */

function Duck() {}

Duck.prototype.go = function (param) {
  console.log(param);
  return this;
};

Duck.prototype.sing = function (param) {
  console.log(param);
  return this;
};

new Duck().go('100').sing('hello');
