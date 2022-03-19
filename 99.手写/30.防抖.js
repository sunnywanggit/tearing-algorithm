// todo 实现立即执行版本

/**
 * @description 函数防抖（普通版本）
 * @param fn
 * @param wait
 */
function debounce(fn, wait) {
  let timer;
  return function () {
    const _this = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, wait);
  };
}
