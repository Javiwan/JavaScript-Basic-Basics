function isBlank (string){
  if(string.length === 0){
    return true;
  }
  for(let i = 0; i < string.length; i += 1){
    if(string[i] !== ' '){
      return false;
    }
  }
  return true;
}
//Much better way to do it
/*
function isBlank(string){
  return string.trim().length === 0;
}
*/

console.log(isBlank(''));
console.log(isBlank(""));
console.log(isBlank("      "));
console.log(isBlank('hola'));
console.log(isBlank('   h'));