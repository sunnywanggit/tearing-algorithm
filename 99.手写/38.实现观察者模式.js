// 被观察者
// eslint-disable-next-line max-classes-per-file
class Children {
  constructor(name) {
    this.name = name;
    this.arr = [];
    this.state = '我很开心';
  }

  attach(parent) { // 注册观察者，基于发布订阅
    this.arr.push(parent);
  }

  setState(newState) {
    this.state = newState;
    // 状态发生变化之后，使用发布订阅模式通知观察者做出相应的响应
    this.arr.forEach((parent) => { parent.update(this); });// 我们这里直接把被观察者传递给观察者
  }
}

class Parent { // 观察者
  constructor(name) {
    this.name = name;
  }

  // 当被观察者的状态发生变化时，同时被观察者做出相应的更新
  update(child) {
    console.log(`${child.name}的当前状态是${child.state}他要通知的人是${this.name}`);
  }
}

const child = new Children('儿子');
const parent = new Parent('爸爸');
// 注册观察者
child.attach(parent);

child.setState('我不开心了');
