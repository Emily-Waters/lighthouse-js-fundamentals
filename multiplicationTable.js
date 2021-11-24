//  We will be given a number as our input data. 
//  This number is the highest value of our 
//  multiplication table. Our job is to generate 
//  a multiplication table for the values from 1 
//  to the provided number.

const multiplicationTable = function(maxValue) {
  //  Format column width based on largest number
  columnWidth = (maxValue.toString().length) + 1;
  //  Store table as a string
  multTableString = '';
  for (let x = 1; x <= maxValue ; x++) {
    for (let y = 1;y <= maxValue ; y++) {
      //  Reset whitespace value
      //  Convert mult values to string
      multTableWS = '';
      multTableTempString = (x * y).toString();
      //  Check if starting a new row. Set param to determine whitespace needed
      y != 1 ? leadingLine = 0 : leadingLine = columnWidth-1;
      //  Adds whitespace needed based on column width,length of string being added
      //  and whether it's the start of a new row. Without leadingLine too much
      //  whitespace gets added. Adjusts whitespace for rjustified text
      for (let z = 0; z <= (columnWidth - multTableTempString.length - leadingLine) ; z++){
        multTableWS+=' ';
      }
      //  Adds new values to string with appropriate whitespace. text is rjust.
      multTableString+= multTableWS+multTableTempString
    }
    //  Add newline esc.char to the end of a row
    multTableString+= '\n'
  }
  return multTableString
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

//  EXPECTED OUTPUT :
//
//  1
//  
//  1 2 3 4 5
//  2 4 6 8 10
//  3 6 9 12 15
//  4 8 12 16 20
//  5 10 15 20 25 
//  
//  1 2 3 4 5 6 7 8 9 10
//  2 4 6 8 10 12 14 16 18 20
//  3 6 9 12 15 18 21 24 27 30
//  4 8 12 16 20 24 28 32 36 40
//  5 10 15 20 25 30 35 40 45 50
//  6 12 18 24 30 36 42 48 54 60
//  7 14 21 28 35 42 49 56 63 70
//  8 16 24 32 40 48 56 64 72 80
//  9 18 27 36 45 54 63 72 81 90
//  10 20 30 40 50 60 70 80 90 100