async function async1() {
  // 2
  console.log('async1 start');
  await async2();
  // 6
  console.log('async1 end');
}

async function async2() {
  // 3
  console.log('async2');
}

// 1
console.log('script start');

setTimeout(() => {
  // 9
  console.log('setTimeout');
}, 0);

requestAnimationFrame(() => { // 注意这个函数
  // 8
  console.log('requestAnimationFrame');
});

async1();

new Promise((resolve) => {
  // 4
  console.log('promise');
  resolve();
}).then(() => {
  // 7
  console.log('then');
});
// 5
console.log('script end');

/*
script start
async1 start
async2
promise
script end
async1 end
then
requestAnimationFrame
setTimeout
 */
