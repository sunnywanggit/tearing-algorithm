/**
 * 题目:https://leetcode.cn/problems/generate-parentheses/
 *
 */

// 题解：https://labuladong.github.io/algo/4/29/108/

function generateParenthesis(n) {
  // 记录所有合法的括号组合
  const res = [];
  if (n === 0) return res;
  // 回溯过程中的路径
  const track = [];

  // 可用的左括号数量为 left 个，可用的右括号数量为 right 个
  function backtrack(left, right, track, res) {
    // 若左括号剩下的多，说明不合法
    if (right < left) return;
    // 数量小于 0 肯定是不合法的
    if (left < 0 || right < 0) return;
    // 当所有括号都恰好用完时，得到一个合法的括号组合
    if (left === 0 && right === 0) {
      res.push(track.join(''));
      return;
    }

    // 尝试放一个左括号
    track.push('('); // 选择
    backtrack(left - 1, right, track, res);
    track.pop(); // 撤消选择

    // 尝试放一个右括号
    track.push(')'); // 选择
    backtrack(left, right - 1, track, res);
    track.pop(); // 撤消选择
  }

  // 可用的左括号和右括号数量初始化为 n
  backtrack(n, n, track, res);
  return res;
}

console.log(generateParenthesis(3));
