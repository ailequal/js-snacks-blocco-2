// ask user a four digit number
var userNumber = '';
do {
  userNumber = prompt('Insert a number with 4 digits');
} while (userNumber.length !== 4);
console.log(userNumber);

// some those four digit
var aloneNumber = 0;
var result = 0;
for (var i = 0; i < userNumber.length; i++) {
  aloneNumber = parseInt(userNumber.charAt(i));
  console.log(aloneNumber);
  result += aloneNumber;
}
console.log(result);


//  var firstNumber = parseInt(userNumber.charAt(0));
//  console.log(firstNumber);
//
//  var secondNumber = parseInt(userNumber.charAt(1));
//  console.log(secondNumber);
//
//  var thirdNumber = parseInt(userNumber.charAt(2));
//  console.log(thirdNumber);
//
//  var fourthNumber = parseInt(userNumber.charAt(3));
//  console.log(fourthNumber);
//
// var result = firstNumber + secondNumber + thirdNumber + fourthNumber;
// console.log(result);
