// 利用双指针的思路，实现翻转两个数组
const reverseArr = (arr) => {
	let pre = 0;
	let last = arr.length - 1;
	while(pre < last) {
		[arr[pre], arr[last]] = [arr[last], arr[pre]];
		pre += 1;
		last -= 1;
	}
	return arr;
}

const arr = [1,2,3];



console.log(reverseArr(arr));