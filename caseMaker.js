//  We will receive a normal string of words separated 
//  with spaces as the input. Our job is to convert these 
//  strings into camel cased strings.

const camelCase = function(input) {
  triggerSet = false;
  newString = '';
  for (letter of input) {
    //  First check to determine if the function is on the first word
    //  This check will ensure the first word is not capitalized in the
    //  case of leading whitespace
    if (letter === ' ' && !newString) triggerSet=false;
    //  Check whitespace, set a trigger for the next value
    else if (letter === ' ') triggerSet = true;
    //  When the trigger is set and current letter is not whitespace,
    //  add it on to the end of the new string
    else if (triggerSet) newString+= letter.toUpperCase(), triggerSet = false;
    //  When encountering a regular character not following a whitespace 
    //  (or not the first non-whitespace letter in the string) add it to
    //  the end of the new string.
    else newString+=letter;
  }
  return newString
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//  EXPECTED OUTPUT :
//  thisIsAString
//  loopyLighthouse
//  supercalifragalisticexpialidocious

//  Edge case for leading whitespace, bars included as a handy dandy
//  way to confirm visually that no leading or trailing whitespace
//  gets added to the string.

//  console.log('|'+camelCase("    this   is   a    string   ")+'|');