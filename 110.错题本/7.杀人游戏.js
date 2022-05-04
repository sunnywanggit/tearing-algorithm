/*
  假设100人，分编号1～100，从1号开始报数，报数到3号时，3号淘汰，然后有下一任从1报数，以此类推，最后谁会活下来？
 */
const kill = () => {
  const arr = [...new Array(100).keys()];
  console.log(arr);
  let start = 0;
  while (arr.length > 1) {
    if (start === 3) {
      arr.shift();
      start = 1;
    } else {
      arr.push(arr.shift());
      start += 1;
    }
  }
  return arr;
};

console.log(kill());
