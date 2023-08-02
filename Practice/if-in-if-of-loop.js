//--------------------  for...in
const shake = {
  special: 'Jumbo Shake',
  normal: 'Choclate Shake',
  regular: 'Milk Shake',
};

for (obj in shake) {
  console.log(obj);
}

for (obj in shake) {
  console.log(shake[obj]);
}

for (obj in shake) {
  console.log(`${obj}` + `: ${shake[obj]}`);
}

//-----------------  for...of
const cars = ['BMW', 'Mercedes', 'Mustang', 'Koenigsseg'];

for (let car of cars) {
  console.log(car);
}

for (let [index, car] of cars.entries()) {
  console.log(index, car);
}

let string = 'Ahmedabad';

for (let stringConvert of string) {
  console.log(stringConvert);
}
