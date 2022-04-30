function throttle(fun, time) {
  let t1 = 0; // 初始时间
  return function () {
    const t2 = new Date(); // 当前时间
    if (t2 - t1 > time) {
      fun.apply(this, arguments);
      t1 = t2;
    }
  };
}
