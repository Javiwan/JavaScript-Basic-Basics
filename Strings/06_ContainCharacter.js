let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function inculdesChar(string, search){
  for(let i = 0; i < string.length; i += 1){
    if(string[i] === search){
      
      return true;
    
    }
  }
  return false;
}

console.log(inculdesChar(byteSequence, 'x'));