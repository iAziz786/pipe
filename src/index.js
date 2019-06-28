function identity(value) {
  return value;
}

function pipe(value, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), value);
}

module.exports = pipe;
