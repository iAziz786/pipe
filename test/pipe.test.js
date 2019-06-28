const pipe = require('../src/index');

function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

function square(num) {
  return num * num;
}

describe('pipe', () => {
  test('should return same value when no function is passed', () => {
    const result = pipe(3);
    expect(result).toBe(3);
  });

  test('should return expected output', () => {
    const result = pipe(
      5,
      double,
      triple
    );

    expect(result).toBe(30);
  });

  test('should called in the order of the function passed', () => {
    const doubleNum = pipe(
      3,
      triple,
      square
    );
    expect(doubleNum).toBe(81);
    const tripleOfDouble = pipe(
      3,
      square,
      triple
    );
    expect(tripleOfDouble).toBe(27);
  });
});
