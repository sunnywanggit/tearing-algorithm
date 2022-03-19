/**
 * 地址：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

const result = [];

const findCombination = (digits, index, str) => {
	if(index === digits.length) {
		result.push(str)
		return;
	}
	let char = digits[index];
	// char-0 将字符串转换为数字
	let letters = map[char-0]

	for(let i = 0; i < letters.length; i++) {
		findCombination(digits, index+1, str + letters[i]);
	}
	return;
}


var letterCombinations = function(digits) {
	if(!digits.length) return result;
	findCombination(digits, 0, '');
	return result;
};

var map = {
	0: " ",
	1: "",
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
}

console.log(letterCombinations('2'))
