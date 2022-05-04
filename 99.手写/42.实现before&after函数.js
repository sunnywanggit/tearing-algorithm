function attach(fn, before, after) {
  return function (...arg) {
    before && before();
    fn && fn(...arg);
    after && after();
  };
}

attach(
  (time) => { console.log(time); },
  () => { console.log('before'); },
  () => { console.log('after'); },
)('current');
