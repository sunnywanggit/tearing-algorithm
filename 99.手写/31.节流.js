function throttle(handler, wait) {
  let lastTime = Date.now();
  return function () {
    const nowTime = Date.now();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
