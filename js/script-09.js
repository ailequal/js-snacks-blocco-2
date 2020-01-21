// generate an array with integer number
var arrayNumber = [];
for (var i = 0; i < 5; i++) {
  arrayNumber.push(getRandomNumber(1, 10));
}
console.log(arrayNumber);

// sum all the number in the odd position
var sum = 0;
for (var i = 0; i < arrayNumber.length; i++) {
  if (i % 2 !== 0) {
    sum += arrayNumber[i];
  }
}

console.log('The sum for the odd position in the array is ' + sum);


// function for generating random number
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
