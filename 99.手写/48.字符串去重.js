function unique(str) {
  return str.replace(/(\w)\1+/g, '$1');
}

console.log(unique('aaabbbb'));
