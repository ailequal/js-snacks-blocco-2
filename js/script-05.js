// create empty array
var i = 0;
var number = 0;
var arrayNumbers = [];

// for version
// for (var i = 0; i < 6; i++) {
//   number = parseInt(prompt('Insert a number'));
//   if (number % 2 !== 0) {
//     arrayNumbers.push(number);
//   }
// }

// while version
while (i < 6) {
  number = parseInt(prompt('Insert a number'));
  if (number % 2 !== 0) {
    arrayNumbers.push(number);
  }
  i++;
}

// do version
// do {
//   number = parseInt(prompt('Insert a number'));
//   if (number % 2 !== 0) {
//     arrayNumbers.push(number);
//   }
//   i++;
// } while (i < 6);

console.log(arrayNumbers);
