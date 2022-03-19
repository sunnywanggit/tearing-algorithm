/**
 * 题目：https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */
const MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack1.length || this.stack2.length) {
    return false;
  }
  return true;
};

const obj = new MyQueue();
obj.push(1);
obj.push(2);

const p1 = obj.pop();
const p2 = obj.peek();

console.log(p1);
console.log(p2);
obj.pop();
console.log(obj.empty());

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
