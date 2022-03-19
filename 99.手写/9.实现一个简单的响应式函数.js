// 来实现一个简单的响应式函数，能对一个对象内的所有 key 添加响应式特性，要求最终输出的代码如下方所示：

const render = (key, value) => {
	console.log(`SET key=${key} value=${value}`)
}

const defineReactive = (obj, key, value) => {
	Object.defineProperty(obj, key, {
		get() {
			return value;
		},
		set(newValue) {
			if(newValue !== value) {
				value = newValue;
				render(key, newValue)
			}
		}
	})
}

const reactive = (obj) => {
	// 递归的终止条件
	if (typeof obj === 'object') {
		for (const key in obj) {
			defineReactive(obj, key, obj[key]);
			reactive(obj[key]);
		}
	}
}

const data = {
	a: 1,
	b: 2,
	c: {
		c1: {
			af: 999,
		},
		c2: 4,
		c3: {
			xx: {
				yy: 'yy'
			}

		}
	}
}
reactive(data)

data.a = 5; // set key = a, value = 5
data.c.c2 = 4; // 没有任何输出
data.c.c3.xx.yy = 'yyyyyy';
