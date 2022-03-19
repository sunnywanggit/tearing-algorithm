/**
 * 注意：这道题在求解的时候，首先需要明确数组里面的元素类型，如果只有 number 的话那当然很好办了
 * 但是如何还有其他的数据类型，比如说 对象、数组、NaN 那就比较麻烦了 
 */

/**
 * @description 利用 map 去重
 * 优点：可以 NAN 去重
 * 缺点：对象不能去重
 */
const unique1 = (arr) => {
	const myMap = new Map();
	return arr.filter(item => !myMap.has(item) && myMap.set(item, 1))
}

/**
 * @description Array.from 配合 set 去重
 * 优点：可以 NAN 去重
 * 缺点：对象不能去重
 */
const unique2 = (arr) => {
	return Array.from(new Set(arr))
}

/**
 * @description 展开运算符配合 set 去重
 * 优点：可以 NAN 去重
 * 缺点：对象不能去重
 */
const unique3 = (arr) => {
	return [...new Set(arr)]
}

/**
 * @description 利用 indexOf 去重
 * 缺点：不能 NaN 去重，不能对象去重
 */
const unique4 = (arr) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
}

/**
 * @description 利用 hasOwnProperty 对数组进行去重
 * 优点：可以对所有的类型进行去重
 */
const unique5 = (arr) => {
	var obj = {};

    return arr.filter((item) => {
		// typeof item + item ---> 这里会先计算 typeof
		// 同时需要注意，这里需要加一个 salt 即第二个 item，不然相同类型的就无法去重了，比如说数字
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}


// todo 怎么实现对象和 NaN 的去重
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

console.log(unique5(arr))