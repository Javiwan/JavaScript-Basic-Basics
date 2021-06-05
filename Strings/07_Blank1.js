function isBlank (string){
  return (string === '')? true: false;
}
//Better way
/*
function isBlank (string){
  return string.length === 0;
}
*/

console.log(isBlank(''));
console.log(isBlank(""));
console.log(isBlank(" "));
console.log(isBlank('hola'));