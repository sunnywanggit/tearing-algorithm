/**
 *
 * 模拟实现 call 有三步：
 * 1.将函数设置为对象的属性
 * 2.执行函数
 * 3.删除这个对象的属性
 *
● 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
● 处理传入的参数，截取第一个参数后的所有参数。
● 将函数作为上下文对象的一个属性。
● 使用上下文对象来调用这个方法，并保存返回结果。
● 删除刚才新增的属性。
● 返回结果。
 */

Function.prototype.myCall = function(context, ...arguments) {
	// 判断调用对象
	if (typeof this !== "function") {
	  console.error("type error");
	}
	// 注意：非严格模式下,
	// 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中就是 window 对象)
	// 值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象(用 Object() 转换）
	if(context === null || context === undefined) {
		context = window;
	} else {
		context = Object(context);
	}
	const fn = Symbol('fn');
	// 将调用函数设为对象的方法
	context[fn] = this;
	// 调用函数
	let result = context[fn](...arguments);
	// 将属性删除
	delete context[fn];
	return result;
};

  function Product(name, price) {
	this.name = name;
	this.price = price;
  }

  function Food(name, price) {
	Product.myCall(this, name, price);
	this.category = 'food';
  }

  console.log((new Food('cheese', 5)).name);
  // expected output: "cheese"
