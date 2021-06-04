let word = 'mountain';

function capitalize(theWord){
  return theWord[0].toUpperCase() + theWord.slice(1);
}

console.log(capitalize(word));
console.log(capitalize('river'));
console.log(capitalize('valley'));