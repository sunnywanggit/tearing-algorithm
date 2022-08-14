const debounce = (fn, wait) => {
  let timer;
  return function () {
    const _this = this;
    const _args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(_this, _args);
    }, wait);
  };
};
