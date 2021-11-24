const urlDecode = function(text) {
  let decodeObj = {};
  let keyValue = [];
  //  Convert %20 into spaces, split Key:Value pairs at '&'
  for (keyValPair of termSplit(spaceMaker(text),'&')) {
    //  Separate Keys and Values at the '=' char
    //  now each key and value are in their own nested array
    //  as pairs.
    keyValue.push(termSplit(keyValPair,'='))
  }
  //  Join each nested array back into Key:Value pairs inside an object
  for (keyValPair of keyValue) {
    decodeObj[keyValPair[0]] = keyValPair[1]
  }
  return decodeObj
};

//  Splits at specified char into array.
const termSplit = function (text,char) {
  let splitText = text.split(char)
  return splitText
}

//  Turns '%20' into spaces
const spaceMaker = function(text) {
  splitText = text.split('%20')
  text = splitText.join(' ')
  return text
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


//  EXPECTED OUTPUT :
//  {duck: "rubber"}
//  {bootcamp: "Lighthouse Labs"}
//  {city: "Vancouver", weather: "lots of rain"}
//  "lots of rain"