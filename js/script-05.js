var firstWord = prompt('Insert the first word');
console.log(firstWord);

var secondWord = prompt('Insert the second word');
console.log(secondWord);

wordCompare(firstWord, secondWord);

function wordCompare(word1, word2) {
  if (word1.length === word2.length) {
    console.log('They have the same length');
  } else if (word1.length > word2.length) {
    console.log('word1 is longer');
  } else {
    console.log('word2 is longer');
  }
}
