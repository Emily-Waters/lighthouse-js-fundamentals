//Function to add all even or odd numbers (exclusively) in an array
const conditionalSum = function(values, condition) {
  total = 0;
  for (let i = 0 ; i < values.length ; i++ ){
    //Check if value in current index position is an even number and condition is 'even'
    if ( (condition == 'even') && (Number(values[i]) % 2 == 0) ) {
      //Add even value to running total
      total+= Number(values[i]);
    //Check if value in current index position is an odd number and condition is 'odd'
    } else if ( (condition == 'odd') && (Number(values[i]) % 2 != 0) ) {
      //Add odd value to running total
      total += Number(values[i]);
    }
  }
  return total
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));