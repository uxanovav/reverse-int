module.exports = function reverse (n) {
  return +String(n).split('').filter((d) => d != '-').reverse().join('');
}
