// elementType 元素类型： 如div，button
// attributes：元素 dom 属性，如 src ，href，id 或任意自定义属性
// events: 一个对象，包含要监听的事件如： {onclick:()=>{},onmousedown:()=>{}}
// parent: 宿主元素,创建的元素做为parent子元素。

function CreateDom(elementType, attributes, events, parent) {
  const dom = document.createElement(elementType);
  // 这里其实要做容错是null的情况
  for (const attr in attributes) {
    // 这里我简单的赋值，其实vue或者react源码里都有style等的判断
    dom[attr] = attributes[attr];
  }
  for (const attr in events) {
    // 这里我简单的赋值，其实vue或者react源码里都有style等的判断
    dom[attr] = events[attr];
  }
  parent.appendChild(div);
}
