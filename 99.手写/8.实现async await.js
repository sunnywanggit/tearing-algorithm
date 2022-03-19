const sleep = (str) => new Promise((resolve)=>{
  setTimeout(() => {
    resolve(str)
  }, 2000)
})

// async await 的本质就是生成器
function *test() {
  console.log('in')
  const res1 = yield sleep('hello');
  console.log('res1', res1);
  const res2 = yield sleep('world');
  console.log('res2', res2);
  console.log('success');
}

/**
 * async await 其实就是 generator 的语法糖，可以控制异步的流程，参数也是可以控制的。
 * 问题1：生成器是需要手动触发的， xx.next()，如何让它自动执行呢?
 */

// 下面是手动暴力解法
// const gen = test();
//
// const p = gen.next();
// p.value.then((v1) => {
//   console.log('v1', v1);
//   const p1 = gen.next(v1)
//   console.log('p1', p1);
//
//   p1.value.then((v2) => {
//     console.log('v2', v2);
//     const p2 = gen.next(v2);
//     console.log('p2', p2);
//
//   })
//
// })

// 妈的讲的是个锤子啊，下来自己学习一下吧，下来可以看看 babel 是怎么编译的






















