/**
 * 你能实现一下基于 proxy 的响应式吗？能够监听属性的删除操作，最终要求输出的代码如下方所示
 */

let observerStore = new Map();

function makeObserver(target) {
	let handlerName = Symbol('handler');

	observerStore.set(handlerName, []);

	target.observer = function(handler) {
		observerStore.get(handlerName).push(handler);
	}

	const proxyHandler = {
		get (target, property, receiver) {
			// 处理嵌套对象
			// todo 嵌套逻辑的处理，这里的处理我看的不是特别明白
			if (typeof target[property] === 'object' && target[property] !== null) {
				return new Proxy(target[property], proxyHandler);
			}

			let success = Reflect.get(...arguments);
			if (success) {
				observerStore.get(handlerName).forEach(handler => {
					handler('GET', property, target[property]);
				});
			}
			return success;
		},
		set (target, property, value, receiver) {
			let success = Reflect.set(...arguments);
			if (success) {
				observerStore.get(handlerName).forEach(handler => {
					handler('SET', property, target[property]);
				});
			}
			return success;
		},
		deleteProperty (target, property) {
			let success = Reflect.deleteProperty(...arguments);
			if (success) {
				observerStore.get(handlerName).forEach(handler => {
					handler('DELETE', property);
				});
			}
			return success;
		}
	};

	// 创建 proxy，拦截更改
	return new Proxy(target, proxyHandler);
}

let user = {};

user = makeObserver(user);

user.observer((action, key, value) => {
	console.log(`${action} key=${key} value=${value || ''}`);
})

user.name = 'join' // SET key=name value=join
console.log(user.name) // GET key=name value=join
delete user.name // DELETE key=name value=

