// ---------------------object methods  .keys(), .values(), .entries()
// let object = {
//   name: 'Mitul',
//   age: 22,
//   location: 'Ahmedabad',
// };

// console.log(`${object.name} is ${object.age} and live in ${object.location}.`);
// object.location = 'Rajkot';
// console.log(`${object.name} is ${object.age} and live in ${object.location}.`);

// console.log(Object.entries(object));
// console.log(Object.keys(object));
// console.log(Object.values(object));

//----------------- .create()
const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: false,
  showDetails() {
    const accepting = this.isAvailable
      ? 'is accepting applications'
      : 'is not currently accepting applications';

    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}.`
    );
  },
};

const Mitul = Object.create(job);

Mitul.position = 'Mitul';
Mitul.showDetails();

//----------------  .assign()
const obj = {
  firstName: 'Me',
  lastName: 'Mine',
};

const details = {
  job: 'you',
  employer: 'your',
};

const character = Object.assign(obj, details);

console.log(character);
