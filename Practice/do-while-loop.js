let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);

let a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

// Infinite loop
// while (true) {
//   console.log('Hello, world!');
// }

const popLimit = 10;

let fish = 0;

while (fish < popLimit) {
  fish++;
  console.log("There's room for " + (popLimit - fish) + ' more fish.');
}

const iceCapsAreMelting = true;
let polarBears = 5;

while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  if (polarBears === 0) {
    console.log('There are no polar bears left.');
    break;
  }
}
