// var
var arrayOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(arrayOne);
console.log(arrayTwo);

// add random elements to the first array until has the same length of the second
while (arrayOne.length !== arrayTwo.length) {
  arrayOne.push(getRandomNumber(10, 100));
}
console.log(arrayOne);
console.log(arrayTwo);


// function
// generate random number
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
