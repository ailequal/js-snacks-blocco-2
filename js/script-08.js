// ask the user a number
var userNumber = parseInt(prompt('Insert a number'));
console.log(userNumber);

// use the function to check if is prime
var check = checkPrime(userNumber);

// display result
if (check === true) {
  console.log(userNumber + ' is a prime number');
} else {
  console.log(userNumber + ' is NOT a prime number');
}

// function
// check if the number is prime
function checkPrime(number) {
  var check = true;
  for(var i = 2; i < number; i++) {
    if(number % i === 0) {
      check = false;
    }
  }
  return check;
}
