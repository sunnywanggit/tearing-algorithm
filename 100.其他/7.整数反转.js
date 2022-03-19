/***
 * 题目：https://leetcode-cn.com/problems/reverse-integer/
 */

// 笨办法
const isValidate = (num) => {
	if(Math.abs(num) >= Math.pow(2, 31)) return false;
}

var reverse1 = function(x) {
	if (!isValidate(x)) return 0;
	let number = Number(String(Math.abs(x)).split('').reverse().join(''));
	if (!isValidate(number)) return 0;
	return x < 0 ? -number : number;
};

// todo 做的我心累，有空了再做吧
var reverse2 = function(x) {
	if (!isValidate(x)) return 0;
	let res = 0;
	while(x!=0) {
		//每次取末尾数字
		let tmp = x % 10;
		// //判断是否 大于 最大32位整数
		// if (res>214748364 || (res==214748364 && tmp>7)) {
		// 	return 0;
		// }
		// //判断是否 小于 最小32位整数
		// if (res<-214748364 || (res==-214748364 && tmp<-8)) {
		// 	return 0;
		// }
		res = res * 10 + tmp;
		x = parseInt(x/10, 10);
		console.log(x)
	}
	return !isValidate(x) ? 0 : res;
}

let x = 123

console.log(reverse2(x))