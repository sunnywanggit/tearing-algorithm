/**
 * 题目：2.DOM 的体积过大会影响页面性能，假如你想在用户关闭页面时统计（计算并反馈给服务器）
 当前页面中元素节点的数量总和、元素节点的最大嵌套深度以及最大子元素个数，请用 JS 配合
 原生 DOM API 实现该需求（不用考虑陈旧浏览器以及在现代浏览器中的兼容性，可以使用任意
 浏览器的最新特性；不用考虑 shadow DOM）。比如在如下页面中运行后：
 <html>
 <head></head>
 <body>
 <section>
 <span>f</span>
 <span>o</span>
 <span>o</span>
 </section>
 </body>
 </html>
 会输出：

 {
  totalElementsCount: 7,
  maxDOMTreeDepth: 4,
  maxChildrenCount: 3
}
 */
