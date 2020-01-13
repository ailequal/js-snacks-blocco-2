// var
var number = 2;
var result = 0;

// print power of 2 from 2 to 1000
for (var i = 1; i < 1000; i++) {
  result = Math.pow(number, 2);
  console.log(result);
  number++;
}


var test = powTwo(6);


// function
function powTwo(laps) {
  for (var i = 1; i < laps; i++) {
    result = Math.pow(number, 2);
    console.log(result);
    number++;
  }
  return 'Finished';
}
