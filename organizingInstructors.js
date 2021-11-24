//  Create a function named organizeInstructors that will receive 
//  an array of instructor objects, and will return a new object 
//  that has the following format:
//  
//  {
//    CourseName: [instructors]
//  } 

const organizeInstructors = function(instructors) {
  courseObj= {};
  for (courses of instructors){
    nameArray = [];
    for (names of instructors)
      if (names.course === courses.course) {
        nameArray.push(names.name)
      }
    courseObj[courses.course] = nameArray;
  }
  return courseObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

//  EXPECTED OUTPUT :
//  {
//    iOS: ["Samuel"],
//    Web: ["Victoria", "Karim", "Donald"]
//  }
//  {
//    Blockchain: ["Brendan"],
//    Web: ["David", "Carlos"],
//    iOS: ["Martha"]
//  }