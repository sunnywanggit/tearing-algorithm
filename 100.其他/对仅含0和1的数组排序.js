let nums = [0,1,0,1,0,0,1,1,1,0,1]


/**
 * @description 使用双指针实现
 */
// const sort = (nums) => {
// 	console.time('111')
// 	let L = 0;
// 	let R = nums.length - 1;
// 	while(L < R) {
// 		if (nums[L] !== 1) L++
// 		if (nums[R] !== 0) R--;
// 		if(nums[L] === 1 && nums[R] === 0) [nums[L], nums[R]] = [nums[R], nums[L]]
// 	}
// 	console.timeEnd('111')
// 	return nums;
// }

/**
 * @description 遍列一遍，统计下总共有几个1，把数组前几个设置为0，后边全部设置为1
 */
const sort = (nums) => {
	console.time('222')
	const len = nums.length;
	let counter = 0;
    for(let i = 0; i < len; i++ ){
        counter += nums[i]; //数一遍1
    }
	for (let i = 0; i < len - counter; i++) {
		nums[i] = 0;
	}
    for(let i = len - counter; i < len; i++ ) {
        nums[i] = 1; //全刷1
    }
	console.timeEnd('222')
	return nums;
}

console.log(sort(nums));


