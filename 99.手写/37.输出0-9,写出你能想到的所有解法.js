// for (var i = 0; i < 10; i += 1) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 方式一：var -> let
// for (let i = 0; i < 10; i += 1) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 方式二：闭包
for (let i = 0; i < 10; i += 1) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}
