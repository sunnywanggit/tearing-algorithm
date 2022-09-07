// todo 实现立即执行版本

/**
 * @description 函数防抖（普通版本）
 * @param fn
 * @param wait
 */
function debounce(fn, wait = 300) {
  let timer;
  return function () {
    const _args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, _args);
    }, wait);
  };
}
