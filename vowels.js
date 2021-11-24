//Function to count vowels in a string and return a total as int
const numberOfVowels = function(data) {
  let numOfVowels = 0;
  for (const letter of data) {
    //Switch used to check against set of cases rather than using if(..||..||..|| etc)
    //No default case used as there is no action taken for non vowel characters
    switch(letter) {
      case 'a':
        numOfVowels += 1 ;
        break;
      case 'e':
        numOfVowels += 1 ;
        break;
      case 'i':
        numOfVowels += 1 ;
        break;
      case 'o':
        numOfVowels += 1 ;
        break;
      case 'u':
        numOfVowels += 1 ;
        break;
      }
  }
  return numOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));