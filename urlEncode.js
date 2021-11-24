/*
  Create a function named urlEncode that will receive a string of words,
  and return that string with all of the whitespace characters converted 
  to %20. If there is whitespace on the outside of the string, like in 
  our second example above, you should only replace the whitespace within 
  the string.
*/

const urlEncode = function(text) {
  //  What to replace, with what, and the final output
  encodeOld = " ";
  encodeNew = "%20";
  encodedString = '';

  //  Using a plain forLoop as [i] is relevant
  for (let i = 0 ; i < text.length ; i++) {
    //  Check for first or last [i] (Last [i] is 1 less than length)
    if (i == 0 || i == (text.length - 1 )) {
      //  Check if not blank in first or last [i] and add to encodedString. 
      //  If blank, do nothing.
      if (text[i] != encodeOld) {
        encodedString += text[i];
      }
    //  Check for whitespace. Add '%20' if blank
    } else if (text[i] == encodeOld) {
      encodedString += encodeNew;
    //  If not first or last [i] and not blank
    } else {
      encodedString += text[i];
    } 
  }
  return encodedString;
};

//Tests
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));