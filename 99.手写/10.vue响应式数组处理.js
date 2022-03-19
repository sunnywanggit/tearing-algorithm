/**
 * 题目：Vue 对于数组类型是怎么处理的？你能简单模拟一下对数组方法的监听吗
 * 要求最终输出的代码如下方所示
 */

const render = (method, ...args) => {
	console.log(`Action=${method},args=${args.join(',')}`)
}

const arrPrototype = Array.prototype; // 保存数组原型
const newArrPrototype = Object.create(arrPrototype); // 创建一个新的数组原型

['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'].forEach(method => {
	newArrPrototype[method] = function() {
		// 执行原有的数组方法
		arrPrototype[method].call(this, ...arguments);
		render(method, ...arguments);
	}
});

const reactive = (obj) => {
	if (Array.isArray(obj)) {
		obj.__proto__ = newArrPrototype;
	}
}


const data = [1,2,3,4]

reactive(data);

data.push(5); // Action=push, args=5
data.splice(0, 2); // Action=splice, args=0,2