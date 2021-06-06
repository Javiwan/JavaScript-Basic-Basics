/*
function removeLastChar(string){
  let arr = string.split('');
  
  arr.pop();
  
  return arr.join('');
}
*/

//Better solution

function removeLastChar(string){
  return string.substring(0, string.length - 1);
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));