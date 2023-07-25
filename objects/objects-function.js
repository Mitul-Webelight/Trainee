let me = {
  name: "Mitul",
  age: 22,
  location: "Ahmedabad",
};

let me2 = {
  name: "Meet",
  age: 22,
  location: "Rajkot",
};

// let getSummary = function (intro) {
//     console.log(`${intro.name} is ${intro.age} and live in ${intro.location}.`);
// }

const getSummary = (intro) => {
  return {
    summary: `${intro.name} is ${intro.age} and live in ${intro.location}.`,
  };
};

const meSummary = getSummary(me);
const me2Summary = getSummary(me2);

console.log(meSummary.summary);
console.log(me2Summary.summary);

const convertFahrenhit = (fahrenhit) => {
  return {
    fahrenhit: fahrenhit,
    kelvin: (fahrenhit + 459.67) * (5 / 9),
    celsius: (fahrenhit - 32) * (5 / 9),
  };
};

const temps = convertFahrenhit(100);
console.log(temps);
