/**
 * 设计一个可以设置有效期的 localStorage Api
 * 题目：https://juejin.cn/post/7070643296367804452?share_token=11b13293-2dfe-4201-b002-d2a15e52dafe
 */

// todo
const storage = {
  length: 0,
  container: new Set(),
  setItem: (key, value, endTime) => {
    storage.container.setItem(key, { value, endTime });
  },
  getItem: (key) => {
    const item
    if (!storage.container.getItem(key)) return null;
    const now = Date.now();
  },
  removeItem: () => {

  },
  clear: () => {

  },
};
