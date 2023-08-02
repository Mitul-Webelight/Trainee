for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let hour = 8;
if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Noon!');
} else {
  console.log('Good Evening!');
}

for (let j = 1; j < 10; j += 2) {
  console.log(j);
}

const number = 10
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

function fibonacciSeries(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  return fibSeries;
}

console.log(fibonacciSeries(10));

for (var i = 1; i <= 5; i++) {
  console.log('* '.repeat(i));
}

