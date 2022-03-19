const { event } = require('./test');

const add = (a, b) => console.log(a + b);

event.on('add', add);

module.exports = {
  event,
};
