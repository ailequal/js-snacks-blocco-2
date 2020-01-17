var nameList = ['Irene', 'Mario', 'Rebecca', 'Marco', 'Anna', 'Priscilla', 'Camilla', 'Giuseppe', 'Veronica', 'Maria'];
// console.log(nameList);

var surnameList = ['Rossi', 'Verdi', 'Serafini', 'Verdoni', 'Esati', 'Pari', 'Villa', 'Pellini', 'Costanza', 'Di Lorenzo'];
// console.log(surnameList);

var guestList = [];

for (var i = 0; i < nameList.length; i++) {
  guestList.push(nameList[i] + ' ' + surnameList[getRandomIntInclusive(0, 9)]);
}

console.log(guestList);


// genera a random number between min and max, both are included
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
