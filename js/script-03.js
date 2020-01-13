// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
var arrayFrase = [
  'Oggi troverai una cosa dimenticata',
  "Cio' che e' fatto e' fatto",
  'Il buongiorno si vede dal mattino',
  'Sicuro di aver chiuso il gas?',
  'Chi semina vento raccoglie tempesta',
  "Il mattino ha l'oro in bocca",
  'Tanto va la gatta al lardo, che ci lascia lo zampino'
]

var i = getRandomInt(0, 7);
alert(arrayFrase[i]);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
