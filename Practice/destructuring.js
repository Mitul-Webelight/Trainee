let a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

const [x, y, ...xyz] = ['My', 'Name', 'is', 'Mitul'];

console.log(x);
console.log(y);
console.log(...xyz);