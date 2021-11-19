function range (start,end,step) {
  let rangeArray = [];
  if (start != undefined && step != undefined && end != undefined && step > 0 && start < end) {
    let i = start;
    for (i ; i <= end ; i += step){
      rangeArray.push(i)
    }
  }
  return rangeArray
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
