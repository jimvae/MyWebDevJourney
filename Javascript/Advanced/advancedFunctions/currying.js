// Currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// returns a function

const multiplyBy5 = curriedMultiply(5);

const a = curriedMultiply(3);
const b = multiplyBy5(111);
console.log(a(5), b);