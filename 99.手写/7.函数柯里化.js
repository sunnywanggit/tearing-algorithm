/*
  知识点：
  对象（包括数组，对象，函数等）参与原始运算如算术或逻辑运算时，会无参调用其 toString 或者 valueOf 方法得到一个原始值，
  然后用这个原始值参与运算，这点上应该是借鉴自 Java，但规则好像比 Java 要复杂，具体的我也没有太深究过，
  毕竟 JavaScript 里面我们很少利用这个特性（所以很多人其实不知道）。能够持续调用，必然返回函数，能够当成数值，
  那只能是因为它实现了 toString 或者 valueOf 方法。
 */

function add(...args) {
  if (!args.length) return 0;
  let value = args.reduce((pre, cur) => pre + cur, 0);
  function sum(...moreArgs) {
    if (!moreArgs.length) return value;
    value += moreArgs.reduce((pre, cur) => pre + cur, 0);
    return sum;
  }
  sum.valueOf = () => value;
  sum.toString = () => String(value);
  return sum;
}

console.log(+add(1)(2, 3)(4));
