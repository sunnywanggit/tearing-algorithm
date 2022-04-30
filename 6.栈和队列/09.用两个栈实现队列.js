/*
  题目：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

// todo 状态的转移应该有更好的实现方式
const CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

CQueue.prototype.deleteHead = function () {
  this.stack2 = [...this.stack1.reverse()];
  if (!this.stack2.length) {
    return -1;
  }
  const value = this.stack2.pop();
  this.stack1 = [...this.stack2.reverse()];
  return value;
};
