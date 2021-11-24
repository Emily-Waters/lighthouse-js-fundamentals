const sumLargestNumbers = function(data) {
//Declare placeholder values for two largest numbers
  let firstLarge = 0;
  let secondLarge = 0;
    for (value of data) {
//Check if value of data in current index pos is > stored value
      if (value > firstLarge){
//Set second largest value to previous first largest value,
//Set first largest value to new greater value
        secondLarge = firstLarge
        firstLarge = value;
//Check if value is < first largest value but > second largest value
      } else if (value > secondLarge) {
        secondLarge = value;
      }
    }
//Return summed numbers
  return (firstLarge + secondLarge);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));