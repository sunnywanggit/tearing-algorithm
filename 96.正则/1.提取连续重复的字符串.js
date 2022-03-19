/**
 * 币安原题 将有重复的字符提取出来，例如12323454545666，提取[ '23', '45', '6' ]
 */

const collectRepeatStr = (str) => {
  const repeatStrs = [];
  const repeatRe = /(.+)\1+/g;

  // 很多时候replace并不是用来做替换，而是做数据提取用
  str.replace(repeatRe, ($0, $1) => {
    $1 && repeatStrs.push($1);
  });

  return repeatStrs;
};

// console.log(collectRepeatStr('12323454545666'));
