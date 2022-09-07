function mySetInterval(fn, time = 1000) {
  const timer = setTimeout(() => {
    fn();
    mySetInterval(fn, time);
  }, time);

  return function cancel() {
    clearTimeout(timer);
  };
}

const cancel = mySetInterval(() => {
  console.log(222);
}, 1000);

cancel();
