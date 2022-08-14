const money = '1221fadfda2311111';

function format(str) {
  return str.replace(/(?!^)(?=(\w{3})+$)/g, ',');
}

console.log(format(money));

'111111111111'.replace(/(?!^)(?=(\d{3})+$)/g, ',');
