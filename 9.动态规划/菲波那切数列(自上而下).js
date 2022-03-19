/**
 * 使用记忆化搜索的方式求解菲波那切数列，其实就是在递归的过程中添加上记忆化这个过程。
 * 这里使用的是自上而下的解决问题，就是说我们没有从最基本的问题开始解决，我们假设最基本的问题已经解决了。
 * 
 * 最终我们会发现，自上而下的解决问题是更容易的。
 */

const memo = [];

const fib1 = (n) => {
	if (n === 0) return 0; 

	if (n === 1) return 1;

	if (!memo[n]) {
		memo[n] = fib(n-1) + fib(n-2);
	}

	return memo[n];
}

console.log(fib(3))