const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
const a = compose(sum, sum)(5);

console.log(a);

// deterministic -> no side effects with functional purity