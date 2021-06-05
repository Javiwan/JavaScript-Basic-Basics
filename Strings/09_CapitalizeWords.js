let string = 'launch school tech & talk';

let result = string.split(' ')
let answer = [];

result.forEach(word => answer.push(word[0].toUpperCase()+ word.slice(1)));

console.log(answer.join(' '));
//console.log(answer);