function normalfunction() {
  return console.log('this is normal function');
}

const arrowfunction = () => console.log('this is arrowfunction');

normalfunction();
arrowfunction();

(function (a, b) {
  return a + b + 10;
});

(a, b) => a + b + 10;

const a = 1;
const b = 2;

(function () {
  return a + b + 10;
});

() => a + b + 10;
