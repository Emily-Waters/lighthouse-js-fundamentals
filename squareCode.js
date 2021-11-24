//  In Square Code, the spaces are removed from the english 
//  text and the characters are written into a square (or rectangle). 
//  For example, the sentence "If man was meant to stay on the 
//  ground god would have given us roots" is 54 characters long, 
//  once the spaces are removed, so it is written into a rectangle 
//  with 7 rows and 8 columns.

//  ifmanwas
//  meanttos
//  tayonthe
//  groundgo
//  dwouldha
//  vegivenu
//  sroots

const squareCode = function(message) {
  let resultText = '';
  let newText = message.split(' ')
  newText = newText.join('')
  let textLength = newText.length;
  let textSqRt = Math.ceil(Math.sqrt(textLength))
  for (let row = 0; row < textSqRt ; row++) {
    for (let column = 0 ; column <= textSqRt; column++) {
      if ((textSqRt*column)+row < textLength) {
        resultText+= newText[(textSqRt*column)+row]
      }
    }
    resultText+=' '
  } 
  return resultText
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));



//  EXPECTED OUTPUT :
//  clu hlt io 
//  fto ehg ee dd
//  hae and via ecy
//  imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
