function fn1() {
  console.log('begin');
  for (var i = 0; i < 5; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  console.log('end');
}

// 使用尽可能多的方法让上面 fro 循环中的 i 按顺序输出

function fn2() {
  console.log('begin');
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  console.log('end');
}

function fn3() {
  console.log('begin');
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, 1000, i);
  }
  console.log('end');
}

function fn4() {
  console.log('begin');
  for (let i = 0; i < 5; i += 1) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    }(i));
  }
  console.log('end');
}

fn4();
