/**
 * 题目：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 */

// 最直观的想到的解法
 var findMedianSortedArrays = function(nums1, nums2) {
	 const arr = [...nums1, ...nums2].sort((a,b)=>a-b)
	 if (arr.length % 2 === 0) {
		 return ((arr[arr.length/2] + arr[arr.length/2 - 1])/2).toFixed(5)
	 } else {
		 return arr[Math.floor(arr.length/2)].toFixed(5)
	 }
};

// todo 原谅我，大佬的写法我看不懂，下次在再看吧