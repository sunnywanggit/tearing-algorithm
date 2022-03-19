/**
 * 以动态规划的方式解决斐波那锲数列问题,性能比记忆化的方式更高
 * 节省了递归调用所需要的时间和空间
 * 
 * 动态规划的思想就是，将原问题拆解成若干子问题，同时保存子问题的答案，
 * 使得每个子问题只求解一次，最终获得原问题的答案。
 */

const fib = (n) => {
 	const memo = [];

	memo[0] = 0;
	memo[1] = 1;

	for (let i = 2; i <= n; i++) {
		memo[i] = memo[i-1] + memo[i-2];
	}

	return memo[n];
}

console.log(fib(3))