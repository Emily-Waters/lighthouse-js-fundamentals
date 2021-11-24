//Function to determine longest {name:} in an object
const instructorWithLongestName = function(instructors) {
  //Establish default object in matching format
  longestNameObject = {name:'',course:''};

  for (const instructorObject of instructors) {
    //Compare length of {name:} to current longest {name:}
    //In cases of matching length, first value passed in doesn't get replaced
    if (instructorObject.name.length > longestNameObject.name.length) {
      longestNameObject = instructorObject;
    }
  }
  //Return object
  return longestNameObject;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));