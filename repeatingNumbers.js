/*
Create a function named repeatNumbers that will return a string with 
each of the given values repeated the appropriate number of times, 
if there are multiple sets of values each set should be separated by 
a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function(data) {
  newString = '';
  for(let x = 0 ; x < data.length ; x++ ) {
    for(let y = 0; y < Number(data[x][1]) ; y++){
      newString+= data[x][0];
    }
    if (x < (data.length - 1)) newString+=', ';
  }
  return newString;
};

console.log(repeatNumbers( [ [1, 10] ] ));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
expected output
1111111111
11, 222
10101010, 343434343434, 9292
*/



