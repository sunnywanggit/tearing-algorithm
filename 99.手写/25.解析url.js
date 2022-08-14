/**
 * 出现得挺高频的，把一个url的query参数，解析成指定格式的对象。
 */

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

/**
 * @description 使用正则表达式解析query
 */
// const parseQuery = (url) => {
//   const obj = Object.create(null);
//
//   url.replace(/([^?&=]+)=([^?&=]*)/g, (rs, $1, $2) => obj[$1] = $2);
//
//   return obj;
// };

const url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

const parseQuery = (url) => {
  const result = {};
  const queryStr = url.slice(url.indexOf('?') + 1); // 取出 ？ 后面的字符串
  if (!queryStr) return result;
  const queryArr = queryStr.split('&'); // 将字符串以 & 为分隔符分割为数组
  const len = queryArr.length;
  for (let i = 0; i < len; i += 1) {
    const pair = queryArr[i];
    if (/=/.test(pair)) { // 处理有 value 的参数
      const [key, val] = pair.split('='); // 分割 key 和 value
      let value = decodeURIComponent(val); // 解码
      value = /^\d+$/.test(value) ? parseFloat(value) : value; // 判断是否转为数字
      if (result.hasOwnProperty(key)) { // 如果对象有 key 则添加一个值
        result[key] = [].concat(result[key], value);
      } else { // 如果对象没有key，则创建key并设置值
        result[key] = value;
      }
    } else { // 处理没有 value 的参数
      result[pair] = true;
    }
  }
  return result;
};

console.log(parseQuery(url));
