const template = '我是{{name}}，年龄{{age}}，性别{{sex}}';

const data = {
  name: '姓名',
  age: 18,
  sex: '男',
};

function render(template, data) {
  const computed = template.replace(/\{\{(\w+)\}\}/g, (match, key) => data[key]);
  return computed;
}

console.log(render(template, data)); // 我是姓名，年龄18，性别undefined
