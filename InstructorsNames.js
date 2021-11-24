const instructorWithLongestName = function(instructors) {
  nameLength = 0;
  longName = {};
  for (const instObj of instructors) {

    if (instObj.name.length > nameLength) {
      nameLength = instObj.length
      longName = instObj
    }

  }
  return longName
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