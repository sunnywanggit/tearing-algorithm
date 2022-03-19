/**
 * 题目：https://leetcode-cn.com/problems/sum-of-left-leaves/
 */

 var sumOfLeftLeaves = function(root) {
	 if (root === null) return 0;
	 return sumOfLeftLeaves(root.left)
};