let object = {
  name: 'Mitul',
  age: 22,
  location: 'Ahmedabad',
};

console.log(`${object.name} is ${object.age} and live in ${object.location}.`);
object.location = 'Rajkot';
console.log(`${object.name} is ${object.age} and live in ${object.location}.`);

console.log(Object.entries(object));
console.log(Object.keys(object));
console.log(Object.values(object));
