/*
For this challenge we will implement a function called checkAir(), 
which will check a collection of air samples. The function will 
take in two arguments. The first argument is an array of strings, 
where each string represents a small air sample that is either 
clean or dirty. The second argument is a number representing the 
highest acceptable amount of dirty samples. For example, a 
threshold of 0.4 means that there must be less than 40% of total 
samples classified as dirty for our air to be considered clean. 
Our function must return Polluted if there are too many dirty air 
samples, or Clean if the proportion of dirty samples is below the 
threshold.
*/

const checkAir = function (samples, threshold) {
  //  Extrapolate total number of samples to compare to later. Default 0 dirty samples.
  let total = samples.length;
  let dirtyCounter = 0;
  for (airSample of samples) {
    //Using switch()case: for fun because I used ternary operators on the last one
    switch(airSample) {
      case 'dirty':
        dirtyCounter += 1
    }
  }
  //  Dirty or clean?
  if (dirtyCounter/total >= threshold) {
    return 'Polluted! \t'+((dirtyCounter/total)*100).toFixed(2)+'% of samples are dirty! The acceptable limit is '+(threshold*100).toFixed(2)+'%'
  } else {
    return 'Clean!    \t'+((dirtyCounter/total)*100).toFixed(2)+'% of samples are dirty. The acceptable limit is '+(threshold*100).toFixed(2)+'%'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/*
Expected output :
Polluted
Polluted
Clean
*/