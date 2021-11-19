function lastIndexOf (evalArray, value) {
  if (evalArray.length > 0) {
    let indexPos = value
    for (let i = 0 ; i < evalArray.length ; i++) {
      if (evalArray === value) {
        indexPos = i
      }
    }
    return indexPos
  }
  return indexPos
}







console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));