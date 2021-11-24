
const blocksAway = function(directions) {
  //  Establish compass. 0 is north, 123 are esw, -123 are wse. reset to 0 at 4 or -4
  let whichWay = ['N','E','S','W']
  let xPos = 0;
  let yPos = 0;
  let compassVal = 0;
  let dirArray = [];
  let movArray = [];
  let dirObj = {'east' : 0 ,'north' : 0}
  let turnCounter = 0;
  //  Separate directions and moves into individual arrays
  for (dir of directions) {
    if (typeof dir === typeof '') {
      dirArray.push(dir)
    } else {
      movArray.push(dir)
    }
  }
  //  Main loop
  for (let i = 0 ; i < dirArray.length ; i++) {
    //  Adjust compass heading
    if (dirArray[i] === 'right') {
      compassVal += 1
      //  If compass is 4 (out of range for dirArray[]) reset to 0
      if (compassVal === 4) {
        compassVal = 0
      }
    } else {
      //  If compass is -4 (out of range for dirArray[]) reset to 0
      //  Check if it's the first turn and reset compass to north for initial left turn
      compassVal -= 1
      if (compassVal === -1 && i) {
        compassVal = 3
      } else if (!i) {
        compassVal = 0
      }
    }
    //  Determine direction of movement with compass then
    //  add/subtract the appropriate value from x/y
    if (whichWay[compassVal] === 'N') {
      yPos += movArray[i];
    } else if (whichWay[compassVal] === 'S') {
      yPos -= movArray[i];
    } else if (whichWay[compassVal] === 'E') {
      xPos += movArray[i];
    } else if (whichWay[compassVal] === 'W') {
      xPos -= movArray[i];
    }
  }
  //  Update final position values in object
  dirObj.east = xPos
  dirObj.north = yPos
  return dirObj
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));