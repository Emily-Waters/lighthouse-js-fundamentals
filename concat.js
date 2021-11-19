function concat (array1,array2) {
  let concatArray = []
  let i = 0;
  while ( i < array1.length) {
    concatArray.push(array1[i])
    i++
  }
  i = 0
  while ( i < array2.length) {
    concatArray.push(array2[i])
    i++
  }
  return concatArray
//  return concatArray.sort()
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);