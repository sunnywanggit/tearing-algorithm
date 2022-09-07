/*
  题目：https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/
 */
const exist = function (board, word) {
  const words = Array.from(word);

  function dfs(board, words, i, j, k) {
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== word[k]) return false;
    if (k === word.length - 1) return true;
    board[i][j] = '';
    const res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1)
      || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1);
    board[i][j] = word[k];
    return res;
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (dfs(board, words, i, j, 0)) return true;
    }
  }
  return false;
};
// [0, 0]
//   [1, 0]
//   [0, 1];
const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
const word = 'ABCCED';

console.log(exist(board, word));
