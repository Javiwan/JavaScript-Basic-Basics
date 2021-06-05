function repeat(num, phrase){
  let result = '';
  for(let i = 0; i < num; i += 1){
    result += phrase;
  }
  return result;
}

console.log(repeat(4, 'hola'));
console.log(repeat (8, 'ohayou '));

//Another way
/*
function repeat(n, string){
  let result = '';

  while (n > 0){
    result += string;
    n -= 1;
  }
  return result;
}
*/