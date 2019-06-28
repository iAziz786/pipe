# pipe :shower:

A utility function to use to create pipe line operations for your JavaScript applications.

### What is a pipe line operation?

A pipeline operation is bunch of function call that starts with a value and the result
of last function call is the parameter of the next function call. The sequence of the call
matters. If we change the sequence then the result will be very different.

#### Example

```js
const pipe = require('pipe');

const initialPrice = 5;
const coffeePrice = pipe(
  initialPrice,
  double,
  triple
);

console.log(coffeePrice); // result: 30

function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}
```
