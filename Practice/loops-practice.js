const library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
];

for (let i = 0; i < library.length; i++) {
  let book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.';
  if (library[i]) {
    console.log('Already read ' + book);
  }
}

var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
  largest = arr[i] > largest ? arr[i] : largest;
}
console.log(largest);
