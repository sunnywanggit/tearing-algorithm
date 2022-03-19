/**
 * 出现得挺高频的，把一个url的query参数，解析成指定格式的对象。
 */

// todo 这个可以直接使用正则实现，是露白讲的一节课，这个下来可以找找看
// todo 下来好好学习一下正则

// const url = 'www.baidu.com?name=xiaoming&age=10&school=xinhua&id=1&id=2';
const url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

/**
 * @description 使用正则表达式解析query
 */
const parseQuery = (url) => {
  const obj = Object.create(null);

  url.replace(/([^?&=]+)=([^?&=]*)/g, (rs, $1, $2) => obj[$1] = $2);

  return obj;
};

console.log(parseQuery(url));
