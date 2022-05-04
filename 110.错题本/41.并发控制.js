// 延迟执行函数
function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

function SuperTask(maxTaskNumber = 2) {
  // 保存需要执行的任务
  this.tasks = [];

  // 正在执行的任务数量
  this.runTaskNumber = 0;

  // 最大的同时(并发)执行的任务数量
  this.maxTaskNumber = maxTaskNumber;
}

SuperTask.prototype.add = function (fn) {
  // 根据使用方法，推测出add函数返回的是一个Promise对象
  return new Promise((resolve) => {
    // 处理任务，任务执行完成后，需要改变 add 返回的promise的状态
    // 保证任务执行完成后，触发add函数后的 then 方法
    const task = () =>

      // 从题目可知fn的返回值时promise对象
      // 因为我们需要根据task执行完成后，再执行后续任务，所以这儿需要把fn的执行结果返回
      fn.call(null).then(() => {
        resolve();
      });

    // 保存任务
    this.tasks.push(task);

    // 执行任务
    this.run();
  });
};
SuperTask.prototype.run = function () {
  // 当前正在执行的任务 小于 并发数量 且 还有需要执行的任务时
  while (this.runTaskNumber < this.maxTaskNumber && this.tasks.length) {
    // 正在执行的任务数+1
    this.runTaskNumber += 1;

    // 获取当前最先被保存在总任务中的任务
    const task = this.tasks.shift();

    task().then(() => {
      // 任务执行完成后，正在执行的任务 -1
      this.runTaskNumber -= 1;

      // 开始下一轮的执行任务
      this.run();
    });
  }
};

const superTask = new SuperTask();

function addTask(time, name) {
  superTask.add(() => timeout(time)).then(() => {
    console.log(`任务${name}完成`);
  });
}

addTask(10000, 1); // 10000ms后输出 任务1完成
addTask(5000, 2); // 5000ms后输出 任务2完成
addTask(3000, 3); // 8000ms后输出 任务3完成
addTask(4000, 4); // 11000ms后输出 任务4完成
addTask(5000, 5); // 15000ms后输出 任务5完成
